import { useEffect, useState } from "react";
import { Play, ArrowRight } from "lucide-react";
import { FilmProjectProps } from "@/types/FilmProject";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "@/lib/firebase-config";

const FeaturedFilm = () => {
  const [film, setFilm] = useState<FilmProjectProps | null>(null);

  useEffect(() => {
    const fetchLatestFilm = async () => {
      try {
        const q = query(
          collection(db, "films"),
          orderBy("year", "desc"),
          limit(1),
        );
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
          const doc = snapshot.docs[0];
          setFilm({
            id: doc.id,
            ...(doc.data() as Omit<FilmProjectProps, "id">),
          });
        }
      } catch (error) {
        console.error("Error fetching latest film:", error);
      }
    };

    fetchLatestFilm();
  }, []);

  if (!film) return null;

  return (
    <section
      className="w-full h-[50vh] md:h-screen bg-center bg-cover flex flex-col justify-center md:justify-end items-center relative p-gap-md md:p-gap-xxl"
      style={{ backgroundImage: `url(${film.thumbnail})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background-muted via-transparent via-50% to-transparent pointer-events-none"></div>
      {/* Content */}
      <div className="flex flex-col items-center text-center w-full md:w-[60%] space-y-gap-sm md:space-y-gap-md">
        <div className="space-y-gap-xxs md:space-y-gap-md">
          <h2 className="text-3xl md:text-4xl lg:text-5xl flex flex-col observed delay-100">
            <span className="md:hidden">Latest Project:</span>
            <span className="hidden md:block">Discover My Latest Project:</span>
            <span>{film.title}</span>{" "}
          </h2>

          <p className="text-foreground-muted max-md:text-sm md:text-lg observed delay-300">
            {film.description}{" "}
          </p>
        </div>

        <div className="flex flex-wrap gap-[4px] md:gap-gap-xs observed delay-500">
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

{
  /*className={`text-3xl md:text-4xl lg:text-5xl flex flex-col observed ${isOnScreen ? "on-screen" : "off-screen-down"} delay-100`}*/
}
export default FeaturedFilm;
