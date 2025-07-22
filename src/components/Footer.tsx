import {
  Instagram,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  Linkedin,
  Facebook,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container w-full backdrop-blur-sm">
      <div className="mt-12 py-12 flex gap-24 justify-center">
        {/* Brand */}
        <div className="space-y-4">
          <div className="text-2xl font-playfair font-bold text-gradient flex items-center">
            <img src="/logo.png" alt="JAS Logo" className="h-10" />
            <p className="w-28 ml-2 text-base text-[var(--primary)]">
              Jasmijn Schrofer
            </p>
          </div>

          <p className="max-w-md">
            Crafting visual narratives that challenge perspectives. Explore my portfolio and discover the stories
            waiting to be told through film.

          </p>

          <div>
            <h5 className="text-lg mb-2">
              Subscribe to my Newsletter
            </h5>
            <div className="flex items-end gap-4">
              <input
                className="w-80 mt-0.5 pl-2 bg-[var(--background)] border-b-[0.5px] border-[var(--foreground-muted)] placeholder-[var(--text-more-muted)]"
                placeholder="Email"
                type="email"
              />
              <button className="text-[var(--text-muted)]">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg mb-4">Quick Links</h4>
          <nav className="text-[var(--text-muted)] space-y-4">
            <a
              href="#"
              className="block text-foreground/60 hover:text-secondary transition-colors duration-500"
            >
              Home
            </a>
            <a
              href="#work"
              className="block text-foreground/60 hover:text-secondary transition-colors duration-500"
            >
              Work
            </a>
            <a
              href="#news"
              className="block text-foreground/60 hover:text-secondary transition-colors duration-500"
            >
              News
            </a>
            <a
              href="#about"
              className="block text-foreground/60 hover:text-secondary transition-colors duration-500"
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-foreground/60 hover:text-secondary transition-colors duration-500"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Contact Info */}
        <div className="border-[0.5px] border-[var(--foreground-more-muted)] p-8 rounded-lg space-y-4 flex flex-col items-start justify-center grow">
          <h3 className="text-3xl md:text-4xl font-bold text-center">
            Let's Create Something Amazing
          </h3>

          <div className="space-y-4 text-[var(--text-muted)]">
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 mt-0.5" />
              <span>
                info@jasmijnschrofer.com
              </span>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 mt-0.5" />
              <span>
                Amsterdam, The Netherlands | Nairobi, Kenya
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-[var(--text-more-muted)]">
            <a
              href="https://www.instagram.com/jasmijnschrofer/"
              className="text-[var(--text-more-muted)] hover:text-[var(--primary)] transition-colors duration-500"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/jasmijn.schrofer/"
              className="text-[var(--text-more-muted)] hover:text-[var(--primary)] transition-colors duration-500"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-[var(--text-more-muted)] hover:text-[var(--primary)] transition-colors duration-500"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/user/jasmijn12"
              className="text-[var(--text-more-muted)] hover:text-[var(--primary)] transition-colors duration-500"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jasmijn-schrofer-2b186a78/?originalSubdomain=nl"
              className="text-[var(--text-more-muted)] hover:text-[var(--primary)] transition-colors duration-500"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.imdb.com/name/nm7353940/"
              className="text-[var(--text-more-muted)] hover:text-[var(--primary)] transition-colors duration-500"
            >
              <img className="h-8" src="/imdb-icon.png" />
            </a>
          </div>
        </div>
      </div>

      <div className="py-8 border-t border-[var(--foreground-more-muted)] text-center text-foreground/40 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Jasmijn Schrofer. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
