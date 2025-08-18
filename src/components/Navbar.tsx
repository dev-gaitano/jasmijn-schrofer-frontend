import { useState, useEffect } from "react";
import { X } from "lucide-react";

const currentPath = window.location.pathname;

const MobileNavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <a
    href={href}
    onClick={onClick}
    className={`text-lg transition-colors duration-500 py-gap-xxs
      ${currentPath === href ? "text-primary font-bold" : "text-foreground hover:text-primary"}`}
  >
    {children}
  </a>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed max-w-7xl top-0 z-[999] w-[calc(100%-var(--gap-md)*2)] mx-gap-md md:w-[1262px] transition-all duration-500 overflow-hidden ${
        isMobileMenuOpen
          ? "rounded-3xl glass-panel top-2"
          : isScrolled
            ? "rounded-full glass-panel top-2"
            : "rouded-3xl md:rounded-full"
      }`}
    >
      <div className="w-full flex items-center justify-between p-gap-xs">
        <a
          href="/"
          className="text-2xl font-playfair font-bold text-gradient flex items-center ml-2"
        >
          <img
            src="https://res.cloudinary.com/diwkfbsgv/image/upload/c_auto,f_auto,g_auto,h_40,q_auto/v1/schrofer/logo?_a=BAMAK+Go0"
            alt="JAS Logo"
            className="h-10"
          />
          {isScrolled || isMobileMenuOpen ? null : (
            <p className="w-28 ml-1 text-base text-[var(--primary)]">
              Jasmijn Schrofer
            </p>
          )}
        </a>
        <div className="h-12 hidden md:flex items-center space-x-8">
          <a
            href="/"
            className={`nav-link hover-lift transition-all duration-500 
              ${currentPath === "/" ? "text-primary font-bold" : ""}`}
          >
            Home
          </a>
          <a
            href="/work"
            className={`nav-link hover-lift transition-all duration-500 ${
              currentPath === "/work" ? "text-primary font-bold" : ""
            }`}
          >
            Work
          </a>
          <a
            href="/about"
            className={`nav-link hover-lift transition-all duration-500 ${
              currentPath === "/about" ? "text-primary font-bold" : ""
            }`}
          >
            About
          </a>
          {isScrolled ? (
            <a
              href="/contact"
              className={`inline-block button-primary hover-lift animate-fadeIn ${
                currentPath === "/contact" ? "text-primary font-bold" : ""
              }`}
              style={{ animationDelay: "0.6s" }}
            >
              Contact
            </a>
          ) : null}
        </div>
        <button
          className="md:hidden mx-gap-xs text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-start p-gap-xs pt-0">
          <MobileNavLink href="/" onClick={() => setIsMobileMenuOpen(false)}>
            HOME
          </MobileNavLink>
          <MobileNavLink
            href="/work"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            WORK
          </MobileNavLink>
          <MobileNavLink
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ABOUT
          </MobileNavLink>
          <MobileNavLink
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            CONTACT
          </MobileNavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
