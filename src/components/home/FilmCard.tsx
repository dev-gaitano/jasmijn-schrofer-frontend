import { Play } from "lucide-react";
import { FilmProjectProps } from "@/types/FilmProject";

interface FilmCardProps {
  film: FilmProjectProps;
  index: number;
  isOnScreen: boolean;
  setRef: (el: HTMLDivElement | null) => void;
  hoveredFilm: string | null;
  setHoveredFilm: (id: string | null) => void;
}

const FilmCard = ({
  film,
  index,
  isOnScreen,
  setRef,
  hoveredFilm,
  setHoveredFilm,
}: FilmCardProps) => {
  return (
    <div
      ref={setRef}
      className={`relative group hover-lift space-y-gap-xs ${
        isOnScreen ? "md:on-screen" : "md:off-screen-right"
      }`}
      style={{ animationDelay: `${index * 200}ms` }}
      onMouseEnter={() => setHoveredFilm(film.id)}
      onMouseLeave={() => setHoveredFilm(null)}
    >
      <div className="relative aspect-[2/3] overflow-hidden rounded-xl shadow-2xl">
        <img
          src={film.poster}
          alt={film.title}
          className="w-full h-full object-cover"
          loading={index === 0 ? "eager" : "lazy"}
        />
        {hoveredFilm === film.id && (
          <div className="absolute inset-0 bg-background-more-muted backdrop-blur-lg animate-fadeIn transition-all duration-500">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-gap-md space-y-gap-xs">
              <button className="flex items-center gap-gap-xxs rounded-full glass-panel hover-lift px-gap-sm py-gap-xxs hover:bg-opacity-10 transition-all duration-500">
                <Play className="w-4 h-4" />
                Watch Trailer
              </button>
              <h3 className="text-xl">{film.title}</h3>
              <p className="text-sm text-foreground-muted">
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
        <div className="flex items-center justify-end md:justify-start gap-gap-xxs text-sm text-foreground-muted">
          <span>{film.year}</span>
          <span>•</span>
          <span>{film.runtime}</span>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;