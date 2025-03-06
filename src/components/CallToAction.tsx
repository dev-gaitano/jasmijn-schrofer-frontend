import React from "react";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="contact" className="w-full relative py-24">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-tr from-background via-background to-black/50 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto border-[0.5px] border-gray-200 p-12 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white, mb-4">
            Let's Create Something Amazing
          </h2>

          <p className="text-center text-gray-700 mb-8">
            Send me an email or explore my portfolio and discover the stories
            waiting to be told through film.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary/10 hover:bg-primary/20 border hover:backdrop-blur border-primary/50 rounded-[24px] text-primary transition-all duration-400 animate-fadeIn"
              style={{ animationDelay: "0.6s" }}
            >
              Contact
            </a>
            <a
              href="#"
              className="px-6 py-3 text-white hover-lift inline-flex items-center gap-2 group hover:text-secondary"
            >
              View
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
