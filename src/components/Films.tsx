import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

interface FilmProject {
  id: number;
  title: string;
  year: string;
  category: string;
  runtime: string;
  thumbnail: string;
  description: string;
  awards?: string[];
}

const films: FilmProject[] = [
  {
    id: 1,
    title: "Birth of Light",
    year: "2024",
    category: "Short Film",
    runtime: "23mins",
    thumbnail: "/birth-of-light-poster-comp.jpg",
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
    thumbnail: "/tarikat-poster-comp.jpg",
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
    thumbnail: "/unfold-poster-comp.jpg",
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
    <section id="films" className="relative py-24 bg-background w-full">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-black/50 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-secondary/40 via-transparent via-45% to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/40 via-transparent via-50% to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent/40 via-transparent via-50% to-transparent pointer-events-none"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex justify-center md:justify-start items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Films</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {films.map((film, index) => (
            <div
              key={index}
              ref={(el) => (observedElements.current[index] = el)}
              className={`relative group transition-all duration-700 hover-lift ${isOnScreen.has(index) ? "on-screen" : "off-screen-right"}`}
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredFilm(film.id)}
              onMouseLeave={() => setHoveredFilm(null)}
            >
              {" "}
              <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
                {" "}
                <img
                  src={film.thumbnail}
                  alt={film.title}
                  className="w-full h-full object-cover"
                />{" "}
                {hoveredFilm === film.id && (
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-lg animate-fadeIn duration-500">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <button className="mb-4 px-6 py-2 bg-white bg-opacity-5 hover:bg-opacity-10 backdrop-blur shadow-lg rounded-full glass-panel hover-lift flex items-center gap-2 transition-all duration-500">
                        <Play className="w-4 h-4" />
                        Watch Trailer
                      </button>
                      <h3 className="text-xl mb-2">{film.title}</h3>
                      <p className="text-sm text-white/70 mb-4">
                        {film.description}
                      </p>
                      {film.awards && (
                        <div className="flex items-center gap-2 font-serif italic text-gold">
                          <span className="text-sm">{film.awards[0]}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-4">
                <h3 className="font-serif italic font-bold text-lg flex items-center justify-center md:justify-start">
                  {film.title}
                </h3>
                <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-white/60">
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
