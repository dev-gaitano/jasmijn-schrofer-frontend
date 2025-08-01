import { Play, Clock, Calendar } from "lucide-react";
import { FilmProjectProps } from "@/types/FilmProject";

const films: FilmProjectProps[] = [
  {
    id: 1,
    title: "Birth of Light",
    year: "2024",
    category: "Documentary Film",
    runtime: "23mins",
    thumbnail: "/birth-of-light-still.png",
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
  {
    id: 4,
    title: "Te Allen Tijde",
    year: "2023",
    category: "Short Film",
    runtime: "3mins",
    thumbnail: "/birth-of-light-still-comp.jpg",
    description:
      "A visual exploration of personal transformation through the lens of contemporary dance.",
    awards: ["Audience Choice Award - Cannes Short Film Corner"],
  },
  {
    id: 5,
    title: "After Party: What young people do",
    year: "2022",
    category: "Documentary",
    runtime: "23mins",
    thumbnail: "/tarikat-poster-comp.jpg",
    description:
      "An intimate documentary following three generations of women in rural Morocco.",
    awards: ["Best Documentary - Amsterdam Documentary Festival"],
  },
  {
    id: 6,
    title: "Huis Werk",
    year: "2021",
    category: "Short Documentary",
    runtime: "7mins",
    thumbnail: "/unfold-poster-comp.jpg",
    description:
      "A meditation on isolation and connection in urban environments during the pandemic.",
    awards: ["Critics Choice Award - Berlin International Film Festival"],
  },
];

const FilmGrid = () => {
  return (
    <section className="w-full mx-auto p-gap-md md:p-gap-xxl">
      <div className="space-y-gap-lg">
        <div className="space-y-gap-xs">
          <h2 className="text-3xl md:text-4xl">Films</h2>
          <p className="text-foreground-muted">
            A collection of award-winning short films exploring themes of
            culture, identity, and transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gap-lg">
          {films.map((film) => (
            <div key={film.id} className="group cursor-pointer">
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden rounded-lg bg-background-muted">
                <img
                  src={film.thumbnail}
                  alt={film.title}
                  className="w-full h-full object-cover"
                />

                {/* Play overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="button-primary rounded-full p-gap-sm hover-lift">
                    <Play className="w-6 h-6 fill-current" />
                  </div>

                  {/* Runtime badge */}
                  <div className="flex items-center justify-center gap-1 absolute bottom-gap-xs right-gap-xs text-foreground-muted text-xs px-gap-xs py-1 rounded">
                    <Clock className="w-4 h-4" />
                    {film.runtime}
                  </div>
                </div>
              </div>

              {/* Film info */}
              <div className="mt-gap-sm space-y-gap-xxs">
                <h3 className="font-serif italic text-lg group-hover:text-primary transition-colors duration-500">
                  {film.title}
                </h3>

                <div className="flex items-center justify-end md:justify-start gap-gap-xxs text-sm text-foreground-muted">
                  <span>{film.year}</span>
                  <span>•</span>
                  <span>{film.category}</span>
                </div>

                <p className="text-sm text-foreground-more-muted line-clamp-2">
                  {film.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilmGrid;
