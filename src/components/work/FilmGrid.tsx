import { Play, Clock } from "lucide-react";
import { FilmProjectProps } from "@/types/FilmProject";

const films: FilmProjectProps[] = [
  {
    id: 1,
    title: "Birth of Light",
    year: "2024",
    category: "Documentary Film",
    runtime: "23mins",
    thumbnail: "/birth-of-light-still-comp.jpg",
    description:
      "The Death of Darkness examines how life is influenced by the increasing use of artificial light and the question to what extent mankind has progressed.",
    awards: ["Best Documentary Short - Toronto Film Festival"],
  },
  {
    id: 2,
    title: "Tarikat",
    year: "2021",
    category: "Short Film",
    runtime: "17mins",
    thumbnail: "/tarikat-still.jpg",
    description:
      "Dive into an intimate, entrancing viewing experience that takes you into the midst of dhikr, a ritual at the heart of Sufism.",
    awards: ["Special Jury Prize - Rotterdam International Film Festival"],
  },
  {
    id: 3,
    title: "After Party: What young people do",
    year: "2018",
    category: "Documentary",
    runtime: "23mins",
    thumbnail:
      "https://i.vimeocdn.com/video/702097057-5f3c093f9c8d58928b19e3d46936cbd5fbb307dec3c101f9551f50653d3221e5-d_1920x1080?&r=pad&region=us",
    description:
      "This documentary shows us what the Afterparty is about in a discreet and non-sensationalistic way.",
    awards: ["Best Documentary - Amsterdam Documentary Festival"],
  },
  {
    id: 4,
    title: "Unfold",
    year: "2014",
    category: "Short Film",
    runtime: "7mins",
    thumbnail: "/unfold-still.jpg",
    description:
      "An intimate portrayal of transformation and self-discovery through movement and light.",
    awards: ["Best Experimental Film - Berlin Short Film Awards"],
  },
  {
    id: 5,
    title: "Te Allen Tijde",
    year: "2014",
    category: "Short Film",
    runtime: "3mins",
    thumbnail:
      "https://i.vimeocdn.com/video/460494841-e30e8fdc4c46f633992ef53ef8910988aac23e2b83f4b6f691c0fd1e18ba5d86-d_1920x1080?&r=pad&region=us",
    description:
      'This film is a dance registration of "TE ALLEN TIJDE"  (AT ANY TIME) performed in Museum Sonnenborgh',
    awards: ["Audience Choice Award - Cannes Short Film Corner"],
  },
  {
    id: 6,
    title: "Huis Werk",
    year: "2014",
    category: "Short Documentary",
    runtime: "7mins",
    thumbnail: "/scrn-huis-werk-still.png",
    description:
      "Home Work provides an insight into the operations of a local Amsterdam hotel. It is a short documentary about a young Polish female immigrant who works as a chambermaid to financially supports her family back home.",
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
              <div className="mt-gap-sm flex flex-col gap-gap-xxs text-right md:text-left">
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
