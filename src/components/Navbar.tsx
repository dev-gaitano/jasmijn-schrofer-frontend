import { useState, useEffect } from "react";
import { X } from "lucide-react";

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
    className="text-lg text-foreground hover:text-primary transition-colors duration-500 block py-gap-xxs"
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
      className={`fixed max-w-7xl max-h-[82px] top-0 z-[999] w-[78%] md:w-[1262px] flex items-center transition-all duration-500 ${
        isScrolled ? "top-2 rounded-full glass-panel" : ""
      }`}
    >
      <div className="container p-gap-xs">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="text-2xl font-playfair font-bold text-gradient flex items-center ml-2"
          >
            <img
              src="https://res.cloudinary.com/diwkfbsgv/image/upload/c_auto,f_auto,g_auto,h_40,q_auto/v1/schrofer/logo?_a=BAMAK+Go0"
              alt="JAS Logo"
              className="h-10"
            />
            {isScrolled ? null : (
              <p className="w-28 ml-1 text-base text-[var(--primary)]">
                Jasmijn Schrofer
              </p>
            )}
          </a>
          <div className="h-12 hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="nav-link hover-lift transition-all duration-500"
            >
              Home
            </a>
            <a
              href="/work"
              className="nav-link hover-lift transition-all duration-500"
            >
              Work
            </a>
            <a
              href="/news"
              className="nav-link hover-lift transition-all duration-500"
            >
              News
            </a>
            <a
              href="/about"
              className="nav-link hover-lift transition-all duration-500"
            >
              About
            </a>
            {isScrolled ? (
              <a
                href="/contact"
                className="inline-block button-primary hover-lift animate-fadeIn"
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
              <X className="w-8 h-8 mx-2" />
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

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-24 left-0 right-0 glass-panel rounded-lg">
              {/*'top' attribute is 'nav' height + 'gap-md'*/}
              <div className="flex flex-col items-center space-y-gap-xs p-gap-xs">
                <MobileNavLink
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </MobileNavLink>
                <MobileNavLink
                  href="/work"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Work
                </MobileNavLink>
                <MobileNavLink
                  href="/news"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  News
                </MobileNavLink>
                <MobileNavLink
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </MobileNavLink>
                <MobileNavLink
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </MobileNavLink>
                <MobileNavLink
                  href="/admin"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Admin
                </MobileNavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
