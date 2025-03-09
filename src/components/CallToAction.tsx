import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="contact" className="w-full relative py-24">
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
              className="inline-block button-primary animate-fadeIn"
              style={{ animationDelay: "0.6s" }}
            >
              Contact
            </a>
            <a
              href="#"
              className="group button-secondary transition-all duration-500"
            >
              View
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 group-hover:text-secondary transition-transform duration-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
