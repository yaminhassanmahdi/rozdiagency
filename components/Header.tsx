"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header>
      <div
        className="header-one lp:max-w-[1290px]! fixed top-5 left-1/2 z-50 mx-auto flex w-full max-w-[350px] -translate-x-1/2 items-center justify-between rounded-2xl bg-white px-2.5 py-2.5 backdrop-blur-[25px] min-[425px]:max-w-[375px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] xl:py-0"
        data-opai-animate
        data-instant
        data-direction="up"
        data-offset="100"
      >
        <div>
          <Link href="/">
            <span className="sr-only">Home</span>
            <figure className="hidden lg:block lg:max-w-[198px]">
              <img src="/images/shared/main-logo.svg" alt="Rozdi Agency" className="w-full" />
            </figure>
            <figure className="block max-w-[44px] lg:hidden">
              <img src="/images/shared/logo.svg" alt="Rozdi Agency" className="block w-full" />
              <img src="/images/shared/logo-dark.svg" alt="Rozdi Agency" className="hidden w-full" />
            </figure>
          </Link>
        </div>
        <nav className="hidden items-center xl:flex">
          <ul className="flex items-center gap-x-2">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Case Studies", href: "/case-study" },
              { name: "Research Papers", href: "/blog" },
            ].map((link) => (
              <li key={link.name} className="nav-item cursor-pointer py-2.5">
                <Link
                  href={link.href}
                  className="hover:border-stroke-2/60 text-tagline-2 font-sora text-background-13/60 hover:text-background-13 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200"
                >
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center justify-center xl:flex">
          <Link href="/contact" className="inline-block" aria-label="Get Free Audit">
            <div className="bg-background-4 group button font-ibm-plex-mono text-tagline-2 text-background-11 button-inner flex h-11 w-full cursor-pointer items-center rounded-xl p-[3px] font-normal first-letter:uppercase">
              <div className="button-icon relative z-20 h-9.5 w-11 overflow-hidden rounded-lg" aria-hidden="true">
                <div className="absolute inset-0 z-10 size-full bg-linear-to-r from-[#ffffff00] from-0% to-[#000000] to-100%" aria-hidden="true">
                  <div className="bg-opai-purple absolute inset-0 z-20 flex size-full items-center justify-center" style={{ boxShadow: "0 3px 10px 0 rgba(255, 255, 255, 0.4) inset" }}>
                    <span className="flex size-6 items-center justify-center" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" className="size-[14px] fill-white/80">
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
              <span className="button-text shrink-0 stroke-0 px-4" aria-hidden="true"> Get Free Audit </span>
            </div>
          </Link>
        </div>
        <div className="block xl:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="nav-hamburger bg-background-4 flex size-12 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full"
          >
            <span className="sr-only">Menu</span>
            <span className="block h-0.5 w-6 bg-white/80"></span>
            <span className="block h-0.5 w-6 bg-white/80"></span>
            <span className="block h-0.5 w-6 bg-white/80"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <aside
        className={`sidebar scroll-bar border-stroke-3/18 fixed top-0 right-0 z-[9999] h-screen w-full border-l bg-white transition-all duration-300 sm:w-1/2 sm:rounded-l-xl xl:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="space-y-4 p-5 sm:p-8 lg:p-9">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="sr-only">Home</span>
              <figure className="max-w-[44px]">
                <img src="/images/shared/logo.svg" alt="Rozdi Agency" className="block w-full" />
              </figure>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="nav-hamburger-close bg-background-13/10 hover:bg-background-13/20 relative flex size-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full transition-colors duration-200"
            >
              <span className="sr-only">Close Menu</span>
              <span className="bg-background-13 absolute block h-0.5 w-4 rotate-45"></span>
              <span className="bg-background-13 absolute block h-0.5 w-4 -rotate-45"></span>
            </button>
          </div>
          <div className="scroll-bar mt-6 h-[85vh] w-full overflow-x-hidden overflow-y-auto pb-10">
            <ul className="space-y-2">
              <li>
                <Link href="/" className="font-sora text-tagline-2 text-background-13/90 block py-2.5" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              </li>
              <li>
                <Link href="/about" className="font-sora text-tagline-2 text-background-13/90 block py-2.5" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
              </li>
              <li>
                <Link href="/services" className="font-sora text-tagline-2 text-background-13/90 block py-2.5" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
              </li>
              <li>
                <Link href="/case-study" className="font-sora text-tagline-2 text-background-13/90 block py-2.5" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</Link>
              </li>
              <li>
                <Link href="/blog" className="font-sora text-tagline-2 text-background-13/90 block py-2.5" onClick={() => setIsMobileMenuOpen(false)}>Research Papers</Link>
              </li>
              <li>
                <Link href="/contact" className="font-sora text-tagline-2 text-background-13/90 block py-2.5" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Header;
