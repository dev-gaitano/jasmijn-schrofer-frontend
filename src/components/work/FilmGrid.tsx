import { Play, Clock, Calendar } from "lucide-react";
import { FilmProjectProps } from "@/types/FilmProject";

const films: FilmProjectProps[] = [
  {
    id: 1,
    title: "Birth of Light",
    year: "2024",
    category: "Short Film",
    runtime: "23mins",
    thumbnail: "/birth-of-light-still-comp.jpg",
    description:
      "Explores the impact of electricity on a remote nomadic community in Northern Kenya, raising questions about modernization's effects on their traditional way of life",
    awards: ["Best Documentary Short - Toronto Film Festival"],
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
    awards: ["Best Experimental Film - Berlin Short Film Awards"],
  },
];

const FilmGrid = () => {
  return (
    <section className="w-full max-w-7xl mx-auto p-gap-md md:p-gap-xl">
      <div className="space-y-gap-lg">
        <div className="space-y-gap-xs">
          <h2 className="text-2xl md:text-3xl font-serif">Films</h2>
          <p className="text-foreground-muted">
            A collection of award-winning short films exploring themes of culture, identity, and transformation
          </p>
        </div>

        <div className="grid grid-cols-1 gap-gap-lg">
          {films.map((film) => (
            <div
              key={film.id}
              className="group cursor-pointer hover-lift"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden rounded-lg bg-background-muted">
                <img
                  src={film.thumbnail}
                  alt={film.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Play overlay */}
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-primary text-primary-foreground rounded-full p-gap-sm hover-lift">
                    <Play className="w-6 h-6 fill-current" />
                  </div>
                </div>

                {/* Runtime badge */}
                <div className="absolute bottom-gap-xs right-gap-xs bg-background/90 text-foreground text-xs px-gap-xs py-1 rounded">
                  {film.runtime}
                </div>
              </div>

              {/* Film info */}
              <div className="mt-gap-sm space-y-gap-xxs">
                <h3 className="font-serif text-lg group-hover:text-primary transition-colors">
                  {film.title}
                </h3>
                
                <div className="flex items-center gap-gap-xs text-sm text-foreground-muted">
                  <Calendar className="w-4 h-4" />
                  <span>{film.year}</span>
                  <span>•</span>
                  <span>{film.category}</span>
                </div>

                <p className="text-sm text-foreground-muted line-clamp-2">
                  {film.description}
                </p>

                {film.awards && film.awards.length > 0 && (
                  <div className="flex items-start gap-gap-xxs">
                    <span className="text-xs text-accent font-medium">
                      🏆 {film.awards[0]}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilmGrid;