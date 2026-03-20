const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brown-900">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Email */}
          <p className="text-center text-base text-cream/70 md:text-left">
            Have a question? Email us at{" "}
            <a
              href="mailto:Mainiti@gmail.com"
              className="font-medium text-cream/90 transition-colors hover:text-cream"
            >
              Mainiti@gmail.com
            </a>
          </p>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-sm text-cream/60 transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/privacy"
              className="font-display text-sm text-cream/60 transition-colors hover:text-cream"
            >
              Privacy
            </a>
            <a
              href="/cookies"
              className="font-display text-sm text-cream/60 transition-colors hover:text-cream"
            >
              Cookies
            </a>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-cream/10 pt-6">
          <p className="text-xs text-cream/60">
            &copy; 2026 Mai Niti All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
