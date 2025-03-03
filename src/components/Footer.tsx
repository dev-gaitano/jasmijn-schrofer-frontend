import {
  Instagram,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black/50 backdrop-blur-sm border-t border-white/10">
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
            <p className="text-white/60 mb-6 max-w-xs">
              Crafting visual narratives that challenge perspectives and touch
              hearts.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-white/60 hover:text-secondary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-secondary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-secondary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-secondary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a
                href="#"
                className="block text-white/60 hover:text-secondary transition-colors"
              >
                Home
              </a>
              <a
                href="#films"
                className="block text-white/60 hover:text-secondary transition-colors"
              >
                Films
              </a>
              <a
                href="#about"
                className="block text-white/60 hover:text-secondary transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="block text-white/60 hover:text-secondary transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-white/60">info@jasmijnschrofer.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-white/60">
                  Amsterdam, The Netherlands
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          <p>© {currentYear} Jasmijn Schrofer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
