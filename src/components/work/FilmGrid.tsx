import { Play, Clock } from "lucide-react";
import { FilmProjectProps } from "@/types/FilmProject";
import { useEffect, useState, useMemo } from "react";
import FilmSearchAndFilter from "./FilmSearchAndFilter";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase-config";

const FilmGrid = () => {
  const [films, setFilms] = useState<FilmProjectProps[]>([]);
  const [loadingFilms, setLoadingFilms] = useState(true);
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    yearRange: [2010, 2024] as [number, number],
    runtimeRange: [0, 30] as [number, number],
  });

  useEffect(() => {
    const fetchFilms = async () => {
      const querySnapshot = await getDocs(collection(db, "films"));
      const filmList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as FilmProjectProps[];

      setFilms(filmList);
      setLoadingFilms(false);
    };
    fetchFilms();
  }, []);

  // Get unique categories for filter dropdown
  const categories = useMemo(
    () => Array.from(new Set(films.flatMap((film) => film.category))),
    [films],
  );

  // Filter films based on search and filter criteria
  const filteredFilms = useMemo(() => {
    return films.filter((film) => {
      const matchesSearch =
        film.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        film.description.toLowerCase().includes(filters.search.toLowerCase());

      const matchesCategory =
        !filters.category || film.category.includes(filters.category);

      const filmYear = parseInt(film.year);
      const matchesYear =
        filmYear >= filters.yearRange[0] && filmYear <= filters.yearRange[1];

      const runtimeMinutes = parseInt(
        film.runtime.replace("mins", "").replace("min", ""),
      );
      const matchesRuntime =
        runtimeMinutes >= filters.runtimeRange[0] &&
        runtimeMinutes <= filters.runtimeRange[1];

      return matchesSearch && matchesCategory && matchesYear && matchesRuntime;
    });
  }, [filters, films]);

  return (
    <section className="w-full p-gap-md md:p-gap-xxl space-y-gap-lg">
      <div className="space-y-gap-xs text-right">
        <h2 className="text-3xl md:text-4xl">Films</h2>
        <p className="hidden md:block text-foreground-muted">
          A collection of award-winning short films exploring themes of culture,
          identity, and transformation
        </p>
      </div>

      {/* Search and Filter Component */}
      <FilmSearchAndFilter
        filters={filters}
        onFiltersChange={setFilters}
        categories={categories}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gap-lg">
        {loadingFilms ? (
          <div className="col-span-full text-center py-gap-xxl">
            <p className="text-foreground-muted">Loading Films...</p>
          </div>
        ) : filteredFilms.length > 0 ? (
          filteredFilms.map((film) => (
            <div key={film.id} className="group cursor-pointer">
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden rounded-xl bg-background-muted">
                <img
                  src={film.thumbnail}
                  alt={film.title}
                  className="w-full h-full object-cover"
                />

                {/* Play overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-y-0 w-full bg-gradient-to-t from-background via-transparent to-transparent"></div>
                  {/* Runtime badge */}
                  <div className="flex flex-col items-start gap-1 absolute bottom-gap-xs left-gap-xs text-foreground-muted text-xs">
                    <span>{film.year}</span>

                    <div className="flex items-center justify-center gap-1 text-foreground-muted text-xs">
                      {film.runtime}
                      <Clock className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="button-primary rounded-full absolute bottom-gap-xs right-gap-xs p-gap-xs">
                    <Play className="w-6 h-6 fill-current" />
                  </div>
                </div>
              </div>

              {/* Film info */}
              <div className="mt-gap-sm flex flex-col gap-gap-xxs text-right md:text-left">
                <h3 className="font-serif italic text-lg group-hover:text-primary transition-colors duration-500">
                  {film.title}
                </h3>

                <p className="text-sm text-foreground-more-muted line-clamp-2">
                  {film.description}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-gap-xxl">
            <p className="text-foreground-muted">
              No films found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FilmGrid;
