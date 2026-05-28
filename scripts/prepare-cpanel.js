import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const standaloneDir = path.join(rootDir, '.next', 'standalone');
const packageJsonPath = path.join(rootDir, 'package.json');

console.log('🚀 Starting cPanel Deployment preparation...\n');

let originalPackageJsonContent = null;
let hasTypeModule = false;

try {
  // 1. Temporarily strip `"type": "module"` from package.json to force CommonJS Next.js standalone build
  if (fs.existsSync(packageJsonPath)) {
    const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    if (pkg.type === 'module') {
      console.log('🔄 Temporarily converting local project to CommonJS for compilation...');
      hasTypeModule = true;
      originalPackageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');
      delete pkg.type;
      fs.writeFileSync(packageJsonPath, JSON.stringify(pkg, null, 2), 'utf8');
    }
  }

  // 2. Run the Next.js build
  console.log('📦 Step 1: Running Next.js build (CommonJS compilation)...');
  execSync('npm run build', { stdio: 'inherit', cwd: rootDir });
  console.log('\n✅ Next.js build completed successfully.\n');

} catch (buildError) {
  console.error('\n❌ Build process failed:', buildError.message);
  restorePackageJson();
  process.exit(1);
}

// Ensure package.json is always restored even if succeeding steps run into issues
restorePackageJson();

function restorePackageJson() {
  if (hasTypeModule && originalPackageJsonContent) {
    console.log('🔄 Restoring original type: module in local package.json...');
    fs.writeFileSync(packageJsonPath, originalPackageJsonContent, 'utf8');
    console.log('✅ Local package.json restored.\n');
    hasTypeModule = false;
  }
}

try {
  // 3. Verify standalone directory
  if (!fs.existsSync(standaloneDir)) {
    console.error('❌ Error: Standalone build directory not found at .next/standalone');
    process.exit(1);
  }

  // 4. Copy public folder to standalone/public
  const publicDir = path.join(rootDir, 'public');
  const targetPublicDir = path.join(standaloneDir, 'public');

  if (fs.existsSync(publicDir)) {
    console.log('📂 Step 2: Copying public/ folder to standalone/public...');
    fs.cpSync(publicDir, targetPublicDir, { recursive: true });
    console.log('✅ Public folder copied.');
  } else {
    console.log('⚠️ Step 2: No public directory found. Skipping...');
  }

  // 5. Copy .next/static to standalone/.next/static
  const staticDir = path.join(rootDir, '.next', 'static');
  const targetStaticDir = path.join(standaloneDir, '.next', 'static');

  if (fs.existsSync(staticDir)) {
    console.log('📂 Step 3: Copying .next/static/ folder to standalone/.next/static...');
    fs.cpSync(staticDir, targetStaticDir, { recursive: true });
    console.log('✅ Static assets copied.');
  } else {
    console.error('❌ Error: .next/static not found! Build might have failed.');
    process.exit(1);
  }

  // 6. Delete node_modules inside standalone to satisfy CloudLinux NodeJS Selector symlink constraint
  const standaloneNodeModules = path.join(standaloneDir, 'node_modules');
  if (fs.existsSync(standaloneNodeModules)) {
    console.log('🧹 Step 4: Deleting node_modules inside standalone to prevent CloudLinux symlink conflicts...');
    fs.rmSync(standaloneNodeModules, { recursive: true, force: true });
    console.log('✅ Standalone node_modules deleted successfully (dependencies will be installed via cPanel NPM Install).');
  }

  // 7. Write an optimized server-side package.json (without type: module) to the standalone root
  const standalonePackageJson = path.join(standaloneDir, 'package.json');
  if (fs.existsSync(standalonePackageJson)) {
    const pkg = JSON.parse(fs.readFileSync(standalonePackageJson, 'utf8'));
    delete pkg.type; // Ensure CommonJS mode for cPanel
    fs.writeFileSync(standalonePackageJson, JSON.stringify(pkg, null, 2), 'utf8');
  }

  // 7.5. Create install.js helper script for headless cPanel environments
  const installJsPath = path.join(standaloneDir, 'install.js');
  const installJsContent = `// install.js
// Custom script to run npm install programmatically when cPanel UI button fails.
const { execSync } = require('child_process');
const http = require('http');

console.log('🚀 Starting headless NPM Install inside virtual environment...');
try {
  // Use --no-package-lock to bypass corrupted lockfiles and --omit=dev for modern npm
  execSync('npm install --no-package-lock --omit=dev', { stdio: 'inherit' });
  console.log('✅ NPM Install completed successfully!');
  
  // Start a tiny temporary server so cPanel thinks the app is healthy
  http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('NPM Install Completed successfully! You can now change your startup file back to server.js and restart.');
  }).listen(process.env.PORT || 3000);

} catch (err) {
  console.error('❌ NPM Install failed:', err.message);
  http.createServer((req, res) => {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('NPM Install failed: ' + err.message);
  }).listen(process.env.PORT || 3000);
}
`;
  fs.writeFileSync(installJsPath, installJsContent, 'utf8');
  console.log('✅ Custom install.js helper script created.');

  // 8. Package everything into a zip file
  const zipPath = path.join(rootDir, 'cpanel-deploy.zip');
  if (fs.existsSync(zipPath)) {
    console.log('\n🧹 Removing existing cpanel-deploy.zip...');
    fs.unlinkSync(zipPath);
  }

  console.log('\n🗜️  Step 5: Compressing standalone bundle into cpanel-deploy.zip...');
  try {
    // Zip contents of standalone directly, so server.js is at root of the zip
    execSync('zip -q -r ../../cpanel-deploy.zip .', { cwd: standaloneDir, stdio: 'inherit' });
    console.log('\n✨ SUCCESS! cpanel-deploy.zip has been created in the project root.');
    console.log('📝 Size of standalone build zip is ready for deployment.');
  } catch (zipError) {
    console.warn('\n⚠️ Warning: Native zip command failed or is not available.');
    console.log('💡 Workaround: Manually select all contents INSIDE `.next/standalone` (except node_modules) and compress them into `cpanel-deploy.zip`.');
  }

} catch (error) {
  console.error('\n❌ Packaging process failed:', error.message);
  process.exit(1);
}

