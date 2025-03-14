import { Play, ArrowRight } from "lucide-react";

const FeaturedFilm = () => {
  return (
    <section className="w-full h-screen bg-[url(/birth-of-light-still.png)] bg-center bg-cover flex items-center relative">
      <div className="container pl-36 z-50 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4 block">
              FILM
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6 leading-tight">
              Discover My Latest Project: Birth of Light
            </h2>

            <p className="text-white/80 mb-8 text-lg">
              So far, the sun and moon dictated the rhythm of the Samburu,
              herdsmen in northern Kenya. Now, they are connected to the power
              network. Poetic impression of life at a point of big changes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-xl mb-3">Latest Project</h3>
                <p className="text-white/70">
                  Delves into the complex themes of modernization's effects on
                  their traditional way of life
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-3">Watch Now</h3>
                <p className="text-white/70">
                  Join us in celebrating the artistry of Jasmijn Schrofer.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center button-primary hover-lift"
              >
                <Play className="w-4 h-4 mr-2" />
                Watch Now
              </a>
              <a
                href="#"
                className="group button-secondary transition-all duration-500"
              >
                Learn More
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 group-hover:text-secondary transition-transform duration-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFilm;
