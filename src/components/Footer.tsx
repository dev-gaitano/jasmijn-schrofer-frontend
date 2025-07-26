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
  return (
    <footer className="relative p-gap-xxl w-full">
      <div className="py-gap-lg grid grid-cols-1 md:grid-cols-2 gap-gap-lg items-center">
        <div className="h-60 flex gap-gap-lg">
          {/* Brand */}
          <div className="w-3/4 space-y-4 flex flex-col items-start justify-center">
            <div className="text-2xl font-bold flex items-center">
              <img
                src="https://res.cloudinary.com/diwkfbsgv/image/upload/c_auto,f_auto,g_auto,h_40,q_auto/v1/schrofer/logo?_a=BAMAK+Go0"
                alt="JAS Logo"
                className="h-10"
              />
              <p className="w-28 ml-gap-xxs text-base text-primary">
                Jasmijn Schrofer
              </p>
            </div>

            <p className="max-w-md">
              Crafting visual narratives that challenge perspectives. Explore my
              portfolio and discover the stories waiting to be told through
              film.
            </p>

            <div className="space-y-gap-xs">
              <h5 className="text-lg">Subscribe to my Newsletter</h5>
              <div className="flex justify-between items-center gap-gap-xxs">
                <input
                  className="h-6 pl-gap-xxs flex-grow bg-background border-b-[0.5px] border-foreground-muted placeholder-text-more-muted"
                  placeholder="Email"
                  type="email"
                />
                <button className="text-text-muted hover:text-primary transition-colors duration-500">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-gap-xs">
            <h4 className="text-lg">Quick Links</h4>
            <nav className="text-text-muted space-y-gap-xxs">
              <a
                href="/"
                className="block text-text-muted hover:text-primary transition-colors duration-500"
              >
                Home
              </a>
              <a
                href="/work"
                className="block text-text-muted hover:text-primary transition-colors duration-500"
              >
                Work
              </a>
              <a
                href="/news"
                className="block text-text-muted hover:text-primary transition-colors duration-500"
              >
                News
              </a>
              <a
                href="/about"
                className="block text-text-muted hover:text-primary transition-colors duration-500"
              >
                About
              </a>
              <a
                href="/contact"
                className="block text-text-muted hover:text-primary transition-colors duration-500"
              >
                Contact
              </a>
              <a
                href="/admin"
                className="block text-text-muted hover:text-primary transition-colors duration-500"
              >
                Admin
              </a>
            </nav>
          </div>
        </div>

        {/* Contact Info */}
        <div className="h-60 border-[0.5px] border-foreground-more-muted p-8 rounded-lg space-y-4 flex flex-col items-start justify-center grow">
          <h3 className="text-3xl md:text-4xl text-center">
            Let's Create Something Amazing
          </h3>

          <div className="space-y-4 text-text-muted">
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 mt-0.5" />
              <span>info@jasmijnschrofer.com</span>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 mt-0.5" />
              <span>Amsterdam, The Netherlands | Nairobi, Kenya</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-text-more-muted">
            <a
              href="https://www.instagram.com/jasmijnschrofer/"
              className="text-text-more-muted hover:text-primary transition-colors duration-500"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/jasmijn.schrofer/"
              className="text-text-more-muted hover:text-primary transition-colors duration-500"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-text-more-muted hover:text-primary transition-colors duration-500"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/user/jasmijn12"
              className="text-text-more-muted hover:text-primary transition-colors duration-500"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jasmijn-schrofer-2b186a78/?originalSubdomain=nl"
              className="text-text-more-muted hover:text-primary transition-colors duration-500"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="pt-gap-md border-t-[0.5px] border-foreground-more-muted text-center text-foreground/40 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Jasmijn Schrofer. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
