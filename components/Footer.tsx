import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background-8 pt-[80px] pb-7 md:pt-[120px] xl:pt-[156px]">
      <div className="main-container">
        <div
          data-opai-animate
          data-delay="0.1"
          className="bg-background-5 space-y-16 overflow-hidden rounded-[30px] p-9"
        >
          <div data-opai-animate data-delay="0.2">
            <Link href="/" className="block">
              <span className="sr-only">Neural Networks</span>
              <figure className="h-[40px] w-[166px]">
                <img src="/images/logo/main-logo.svg" alt="logo" className="h-full w-full" />
              </figure>
            </Link>
          </div>
          <div className="grid grid-cols-12 gap-y-8 lg:gap-0">
            <div className="col-span-12 grid grid-cols-12 gap-8 lg:col-span-8">
              <div className="col-span-12 sm:col-span-4 lg:pl-6">
                <div data-opai-animate data-delay="0.3" className="space-y-1">
                  <p className="text-tagline-2 font-semibold text-white/90">Company</p>
                  <ul>
                    {[
                      { name: "About Us", href: "/about" },
                      { name: "Our Team", href: "/team" },
                      { name: "Career", href: "#" },
                      { name: "Services", href: "/services" },
                      { name: "Case Studies", href: "/case-study" },
                    ].map((link) => (
                      <li key={link.name} className="py-2">
                        <Link
                          href={link.href}
                          className="text-tagline-3 footer-link inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-4 lg:col-span-4">
                <div data-opai-animate data-delay="0.4" className="space-y-1">
                  <p className="text-tagline-2 font-semibold text-white/90">Platform</p>
                  <ul>
                    {[
                      { name: "Features & Capabilities", href: "#" },
                      { name: "Process & Workflow", href: "#" },
                      { name: "Security & Compliance", href: "#" },
                      { name: "Integrations", href: "/integration" },
                      { name: "Pricing", href: "/pricing" },
                    ].map((link) => (
                      <li key={link.name} className="py-2">
                        <Link
                          href={link.href}
                          className="text-tagline-3 footer-link inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-4 lg:col-span-4">
                <div data-opai-animate data-delay="0.5" className="space-y-1">
                  <p className="text-tagline-2 font-semibold text-white/90">Resources</p>
                  <ul>
                    {[
                      { name: "Blog", href: "/blog" },
                      { name: "Tutorial", href: "#" },
                      { name: "FAQ", href: "#" },
                      { name: "Support", href: "#" },
                      { name: "Contact", href: "/contact" },
                    ].map((link) => (
                      <li key={link.name} className="py-2">
                        <Link
                          href={link.href}
                          className="text-tagline-3 footer-link inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div data-opai-animate data-delay="0.3" className="space-y-1">
                    <p className="text-tagline-2 text-background-11 font-semibold">Address:</p>
                    <p className="text-tagline-3 font-normal text-white/50">
                      30 North Gould Street, Sheridan, WY 8280
                    </p>
                  </div>
                  <div data-opai-animate data-delay="0.4">
                    <p className="text-tagline-2 text-background-11 mb-1 font-semibold">Contact:</p>
                    <p className="text-tagline-3 font-normal text-white/50">1800 123 4567</p>
                    <p className="text-tagline-3 font-normal text-white/50">hello@pixels71.com</p>
                  </div>
                </div>
                <div data-opai-animate data-delay="0.5" className="space-y-3">
                  <form action="#" className="mx-auto w-full max-w-[550px] space-y-[9px] lg:mx-0 lg:max-w-full">
                    <fieldset>
                      <input
                        type="email"
                        aria-label="Enter your email"
                        placeholder="Enter your email"
                        required
                        className="border-stroke-3/30 bg-background-6 placeholder:text-tagline-3 text-background-8 text-tagline-3 block h-13 w-full rounded-md border px-3 py-[11px] font-normal placeholder:font-normal placeholder:text-white/60 focus:outline-none"
                      />
                    </fieldset>

                    <div className="w-full">
                      <button type="submit" className="w-full" aria-label="Subscribe now">
                        <div className="bg-background-7 text-background-13 group/submit-button-v2 font-ibm-plex-mono text-tagline-2 h-full max-h-[52px] w-full shrink-0 cursor-pointer rounded-md stroke-0 p-1 font-normal first-letter:uppercase">
                          <div className="flex items-center gap-x-4">
                            <div className="relative z-20 h-11 w-[60px] overflow-hidden rounded-sm" aria-hidden="true">
                              <div className="absolute inset-0 z-10 size-full overflow-hidden bg-linear-to-r from-[#ffffff00] from-0% to-[#000000] to-100%" aria-hidden="true">
                                <div className="bg-opai-purple absolute z-20 flex size-full items-center justify-center overflow-hidden" style={{ boxShadow: "0 3px 10px 0 rgba(255, 255, 255, 0.4) inset" }}>
                                  <span className="relative flex size-6 items-center justify-center overflow-hidden" aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" className="absolute size-[14px] translate-x-0 fill-white/80 transition-all duration-500 ease-in-out group-hover/submit-button-v2:translate-x-[140%]">
                                      <path d="M6 0H8V2H6V0Z" />
                                      <path d="M0 0H2V2H0V0Z" />
                                      <path d="M9 3H11V5H9V3Z" />
                                      <path d="M3 3H5V5H3V3Z" />
                                      <path d="M12 6H14V8H12V6Z" />
                                      <path d="M6 6H8V8H6V6Z" />
                                      <path d="M9 9H11V11H9V9Z" />
                                      <path d="M3 9H5V11H3V9Z" />
                                      <path d="M6 12H8V14H6V12Z" />
                                      <path d="M0 12H2V14H0V12Z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" className="absolute size-[14px] -translate-x-[140%] fill-white/80 transition-all duration-500 ease-in-out group-hover/submit-button-v2:translate-x-0">
                                      <path d="M6 0H8V2H6V0Z" />
                                      <path d="M0 0H2V2H0V0Z" />
                                      <path d="M9 3H11V5H9V3Z" />
                                      <path d="M3 3H5V5H3V3Z" />
                                      <path d="M12 6H14V8H12V6Z" />
                                      <path d="M6 6H8V8H6V6Z" />
                                      <path d="M9 9H11V11H9V9Z" />
                                      <path d="M3 9H5V11H3V9Z" />
                                      <path d="M6 12H8V14H6V12Z" />
                                      <path d="M0 12H2V14H0V12Z" />
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <span className="pr-5" aria-hidden="true">Subscribe now</span>
                          </div>
                        </div>
                      </button>
                    </div>
                  </form>

                  <p className="text-tagline-4 font-normal text-white/60">
                    By subscribing you agree to with our{" "}
                    <Link href="#" className="font-medium text-white hover:underline">Privacy Policy</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-stroke-1/10 flex flex-col items-center justify-between gap-2.5 border-y px-5 py-3.5 sm:flex-row sm:gap-0 lg:py-5">
            <ul className="flex items-center gap-6">
              {[
                { name: "Privacy Policy", href: "#" },
                { name: "Terms of Service", href: "#" },
                { name: "Legal", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="footer-link font-inter-tight text-tagline-4 font-normal text-white/50">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-tagline-4 font-normal text-white/50">
              &copy; {new Date().getFullYear()} Rozdi Agency. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
