"use client";

import { useState } from "react";

const navLinks = [
  {
    href: "/",
    label: "Home",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    ),
  },
  {
    href: "/about",
    label: "About",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 2C10 8 6 7 6 12C6 15 8 17 10 17C12 17 14 15 14 12C14 7 10 8 10 2Z" />
        <path d="M10 6C8.5 8 7.5 9.5 7.5 12" opacity="0.5" />
        <path d="M10 6C11.5 8 12.5 9.5 12.5 12" opacity="0.5" />
      </svg>
    ),
  },
  {
    href: "/blog",
    label: "Blog",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
        <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop floating pill navbar */}
      <nav className="fixed top-6 left-1/2 z-50 hidden -translate-x-1/2 items-center gap-1 rounded-full bg-brown-900/90 px-2 py-2 shadow-xl backdrop-blur-md md:flex">
        {/* Logo */}
        <a href="/" className="flex h-10 w-10 items-center justify-center rounded-full text-cream">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 40 40">
            <path fill="currentColor" d="M19.982 11.7V20l-1.73-1.08c-3.073-1.931-4.98-5.52-4.98-9.42H12v9.497c0 3.088 1.625 5.945 4.203 7.295l3.814 2.008V20l1.731 1.08c3.073 1.931 4.98 5.521 4.98 9.42H28v-9.496c0-3.088-1.625-5.945-4.203-7.296L19.982 11.7Z"/>
          </svg>
        </a>

        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="flex items-center gap-2 rounded-full px-5 py-2 font-display text-sm font-medium text-cream/80 transition-colors hover:bg-brown-800/60 hover:text-cream"
          >
            {link.icon}
            {link.label}
          </a>
        ))}

        {/* Green contact button */}
        <a
          href="/contact"
          className="ml-1 flex items-center gap-2 rounded-full bg-forest px-5 py-2 font-display text-sm font-medium text-white transition-colors hover:bg-forest-light"
        >
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          Contact
        </a>
      </nav>

      {/* Mobile navbar */}
      <nav className="fixed top-4 left-4 right-4 z-50 md:hidden">
        <div className="flex items-center justify-between rounded-full bg-brown-900/90 px-4 py-2.5 shadow-xl backdrop-blur-md">
          {/* Logo */}
          <a href="/" className="flex h-9 w-9 items-center justify-center rounded-full text-cream">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 40 40">
              <path fill="currentColor" d="M19.982 11.7V20l-1.73-1.08c-3.073-1.931-4.98-5.52-4.98-9.42H12v9.497c0 3.088 1.625 5.945 4.203 7.295l3.814 2.008V20l1.731 1.08c3.073 1.931 4.98 5.521 4.98 9.42H28v-9.496c0-3.088-1.625-5.945-4.203-7.296L19.982 11.7Z"/>
            </svg>
          </a>

          <div className="flex items-center gap-2">
            {/* Mobile contact button */}
            <a
              href="/contact"
              className="rounded-full bg-forest px-4 py-1.5 font-display text-xs font-medium text-white"
            >
              Contact
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span className={`block h-0.5 w-5 bg-cream transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-cream transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-cream transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="mt-2 overflow-hidden rounded-2xl bg-brown-900/95 shadow-xl backdrop-blur-md">
            <div className="space-y-1 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 font-display text-base text-cream/80 transition-colors hover:bg-brown-800/60 hover:text-cream"
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
