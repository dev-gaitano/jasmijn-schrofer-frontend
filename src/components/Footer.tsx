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
    <footer className="w-full bg-black/50 backdrop-blur-sm border-t border-foreground/10">
      <div className="container px-4 mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4 text-2xl font-playfair font-bold text-gradient flex items-center">
              <img src="/logo.png" alt="JAS Logo" className="h-10" />
              <p className="w-28 ml-1 text-base text-primary">
                Jasmijn Schroffer
              </p>
            </div>
            <p className="text-foreground/60 mb-6 max-w-xs">
              Crafting visual narratives that challenge perspectives and touch
              hearts.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/jasmijnschrofer/"
                className="text-foreground/60 hover:text-secondary transition-colors duration-500"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/jasmijn.schrofer/"
                className="text-foreground/60 hover:text-secondary transition-colors duration-500"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-foreground/60 hover:text-secondary transition-colors duration-500"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/user/jasmijn12"
                className="text-foreground/60 hover:text-secondary transition-colors duration-500"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/jasmijn-schrofer-2b186a78/?originalSubdomain=nl"
                className="text-foreground/60 hover:text-secondary transition-colors duration-500"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.imdb.com/name/nm7353940/"
                className="opacity-60 hover:text-secondary transition-colors duration-500"
              >
                <img className="h-8" src="/imdb-icon.png" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a
                href="#"
                className="block text-foreground/60 hover:text-secondary transition-colors duration-500"
              >
                Home
              </a>
              <a
                href="#films"
                className="block text-foreground/60 hover:text-secondary transition-colors duration-500"
              >
                Films
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
          <div>
            <h4 className="text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-foreground/60">
                  info@jasmijnschrofer.com
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-foreground/60">
                  Amsterdam, The Netherlands | Nairobi, Kenya
                </span>
              </div>
              {/*
              <div className="flex gap-3">
                <input
                  className="mt-0.5 bg-black border-[0.5px] border-foreground/60 rounded-lg"
                  placeholder="Email"
                />
                <button>Subscribe</button>
              </div>
              */}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-foreground/10 text-center text-foreground/40 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Jasmijn Schrofer. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
