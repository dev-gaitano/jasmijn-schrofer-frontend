import { Play, ArrowRight } from "lucide-react";
import { useIsOnScreen } from "@/hooks/useOnScreen";

const FeaturedFilm = () => {
  const { isOnScreen } = useIsOnScreen();

  return (
    <section className="w-full h-screen bg-[url(/birth-of-light-still-comp.jpg)] bg-center bg-cover flex items-center relative">
      <div className="container">
        {/* Content */}
        <div className="flex flex-col w-1/2">
          <div>
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight observed ${isOnScreen ? "on-screen" : "off-screen-left"} delay-300`}
            >
              Discover My Latest Project: Birth of Light
            </h2>


          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center max-md:text-sm button-primary max-md:h-12 hover-lift"
            >
              <Play className="max-md:w-3 md:w-4 md:h-4 mr-2" />
              Watch Now
            </a>
            <a
              href="#"
              className="group button-secondary max-md:text-sm"
              data-text="Learn More"
            >
              Learn More
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 group-hover:text-[var(--secondary)] transition-transform duration-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFilm;
