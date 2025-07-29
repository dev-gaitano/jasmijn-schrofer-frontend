import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { FilmProjectProps } from "@/types/FilmProject";

const films: FilmProjectProps[] = [
  {
    id: 1,
    title: "Birth of Light",
    year: "2024",
    category: "Short Film",
    runtime: "23mins",
    thumbnail:
      "https://res.cloudinary.com/diwkfbsgv/image/upload/c_auto,f_auto,g_auto,q_auto:eco/v1/schrofer/birth-of-light-poster?_a=BAMAK+Go0",
    description:
      "A haunting exploration of memory and loss through the eyes of a young artist.",
    awards: ["Best Short Film - Amsterdam Film Festival"],
  },
  {
    id: 2,
    title: "Tarikat",
    year: "2015",
    category: "Short Film",
    runtime: "17mins",
    thumbnail:
      "https://res.cloudinary.com/diwkfbsgv/image/upload/c_auto,f_auto,g_auto,q_auto:low/v1/schrofer/tarikat-poster-comp?_a=BAMAK+Go0",
    description:
      "A poetic journey into the rituals of a mystical order, blending reality and surrealism.",
    awards: ["Special Jury Prize - Rotterdam International Film Festival"],
  },
  {
    id: 3,
    title: "Unfold",
    year: "2014",
    category: "Short Film",
    runtime: "7mins",
    thumbnail:
      "https://res.cloudinary.com/diwkfbsgv/image/upload/c_auto,f_auto,g_auto,q_auto:eco/v1/schrofer/unfold-poster?_a=BAMAK+Go0",
    description:
      "An intimate portrayal of transformation and self-discovery through movement and light.",
    awards: ["Best Experimental Film - Berlin Short Film Awards 2021"],
  },
];

const Films = () => {
  const [hoveredFilm, setHoveredFilm] = useState<number | null>(null);
  const useIsOnScreen = (threshold = 0.2) => {
    const [isOnScreen, setIsOnScreen] = useState<Set<number>>(new Set());
    const observedElements = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const target = entry.target as HTMLDivElement;
            const index = observedElements.current.indexOf(target);

            if (index !== -1) {
              if (entry.isIntersecting) {
                setIsOnScreen((prev) => new Set(prev.add(index))); // Add to the set when visible
              } else {
                setIsOnScreen((prev) => {
                  const newSet = new Set(prev);
                  newSet.delete(index); // Remove from the set when not visible
                  return newSet;
                });
              }
            }
          });
        },
        { threshold },
      );

      observedElements.current.forEach((el) => {
        if (el) observer.observe(el);
      });

      return () => {
        observedElements.current.forEach((el) => {
          if (el) observer.unobserve(el);
        });
      };
    }, [threshold]);

    return { isOnScreen, observedElements };
  };

  const { isOnScreen, observedElements } = useIsOnScreen();

  return (
    <section id="films" className="relative p-gap-md md:p-gap-xxl w-full">
      {/* Background gradients */}
      <div className="hidden md:block absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-secondary-muted via-transparent via-45% to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary-muted via-transparent via-55% to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent-more-muted via-transparent via-50% to-transparent pointer-events-none"></div>

      <div className="space-y-gap-lg relative z-10">
        <h2 className="hidden md:block text-3xl md:text-4xl">Featured Films</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gap-md">
          {films.map((film, index) => (
            <div
              key={index}
              ref={(el) => (observedElements.current[index] = el)}
              className={`relative group hover-lift space-y-gap-xs ${isOnScreen.has(index) ? "md:on-screen" : "md:off-screen-right"}`}
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredFilm(film.id)}
              onMouseLeave={() => setHoveredFilm(null)}
            >
              <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
                <img
                  src={film.thumbnail}
                  alt={film.title}
                  className="w-full h-full object-cover"
                />
                {hoveredFilm === film.id && (
                  <div className="absolute inset-0 bg-background-more-muted backdrop-blur-lg animate-fadeIn duration-500">
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-gap-md space-y-gap-xs">
                      <button className="flex items-center gap-gap-xxs rounded-full glass-panel hover-lift px-gap-sm py-gap-xxs hover:bg-opacity-10 transition-all duration-500">
                        <Play className="w-4 h-4" />
                        Watch Trailer
                      </button>
                      <h3 className="text-xl">{film.title}</h3>
                      <p className="text-sm text-text-muted">
                        {film.description}
                      </p>
                      {film.awards && (
                        <div className="flex items-center gap-gap-xxs font-serif italic text-gold">
                          <span className="text-sm">{film.awards[0]}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-gap-xxs text-right md:text-left">
                <h3 className="font-serif italic text-lg">{film.title}</h3>
                <div className="flex items-center justify-end md:justify-start gap-gap-xxs text-sm text-text-muted">
                  <span>{film.year}</span>
                  <span>•</span>
                  <span>{film.runtime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Films;
