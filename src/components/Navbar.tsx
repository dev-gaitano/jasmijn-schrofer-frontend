import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed max-w-7xl max-h-[82px] top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-10 backdrop-blur shadow-lg w-3/4 top-2 rounded-[3rem]"
          : "w-3/4"
      }`}
    >
      <div className="container px-2 py-4">
        <div className="flex items-center justify-between px-4">
          <a
            href="/"
            className="text-2xl font-playfair font-bold text-gradient flex items-center"
          >
            <img src="/logo.png" alt="JAS Logo" className="h-10" />
            {isScrolled ? null : (
              <p className="w-28 ml-1 text-base text-primary">
                Jasmijn Schroffer
              </p>
            )}
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#hero"
              className="nav-link relative bottom-0 transition-all duration-300 hover:relative hover:bottom-1"
            >
              Home
            </a>
            <a
              href="#films"
              className="nav-link relative bottom-0 transition-all duration-300 hover:relative hover:bottom-1"
            >
              Films
            </a>
            <a
              href="#showreel"
              className="nav-link relative bottom-0 transition-all duration-300 hover:relative hover:bottom-1"
            >
              News
            </a>
            <a
              href="#about"
              className="nav-link relative bottom-0 transition-all duration-300 hover:relative hover:bottom-1"
            >
              About
            </a>
            {isScrolled ? (
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-primary/10 hover:bg-primary/20 border hover:backdrop-blur border-primary/50 rounded-[24px] text-primary transition-all duration-400 animate-fadeIn"
                style={{ animationDelay: "0.6s" }}
              >
                Contact
              </a>
            ) : null}
          </div>
          <button className="md:hidden text-foreground mx-4">
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
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
