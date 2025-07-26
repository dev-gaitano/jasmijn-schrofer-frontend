import { Play, ArrowRight } from "lucide-react";
import { useIsOnScreen } from "@/hooks/useOnScreen";

const FeaturedFilm = () => {
  const { isOnScreen } = useIsOnScreen();
  const featuredFilm =
    "https://res.cloudinary.com/diwkfbsgv/image/upload/c_auto,f_auto,g_auto,q_auto:eco/v1/schrofer/birth-of-light-still-comp?_a=BAMAK+Go0";

  return (
    <section
      className="w-full h-screen bg-center bg-cover flex flex-col justify-end items-center relative p-gap-xxl"
      style={{ backgroundImage: `url(${featuredFilm})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background-muted via-transparent via-50% to-transparent pointer-events-none"></div>
      {/* Content */}
      <div className="flex flex-col items-center text-center w-[60%] space-y-gap-md">
        <div className="space-y-gap-md">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl flex flex-col observed ${isOnScreen ? "on-screen" : "off-screen-down"} delay-100`}
          >
            Discover My Latest Project:
            <span>Birth of Light</span>
          </h2>

          <p
            className={`text-text-muted max-md:text-sm md:text-lg observed ${isOnScreen ? "on-screen" : "off-screen-down"} delay-300`}
          >
            So far, the sun and moon dictated the rhythm of the Samburu,
            herdsmen in northern Kenya. Now, they are connected to the power
            network. Poetic impression of life at a point of big changes.
          </p>
        </div>

        <div
          className={`flex flex-wrap gap-4  observed ${isOnScreen ? "on-screen" : "off-screen-down"} delay-500`}
        >
          <a
            href="https://vimeo.com/jasmijnschrofer"
            target="_blank"
            className="inline-flex items-center justify-center max-md:text-sm button-primary max-md:h-12 hover-lift"
          >
            <Play className="max-md:w-3 md:w-4 md:h-4 mr-gap-xxs" />
            Watch Now
          </a>
          <a
            href="https://www.imdb.com/title/tt32920047/"
            target="_blank"
            className="group button-secondary font-serif italic max-md:text-sm"
            data-text="Learn more"
          >
            Learn more
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 group-hover:text-secondary transition-transform duration-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFilm;
