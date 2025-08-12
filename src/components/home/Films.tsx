import { lazy, Suspense } from "react";
import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { FilmProjectProps } from "@/types/FilmProject";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "@/lib/firebase-config";

// Lazy load heavy components
const LazyFilmCard = lazy(() => import("./FilmCard"));

const useIsOnScreen = (threshold = 0.2) => {
  const [isOnScreen, setIsOnScreen] = useState<Set<number>>(new Set());
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number((entry.target as HTMLDivElement).dataset.index);
          setIsOnScreen((prev) => {
            const newSet = new Set(prev);
            if (entry.isIntersecting) {
              newSet.add(index);
            } else {
              newSet.delete(index);
            }
            return newSet;
          });
        });
      },
      { threshold },
    );
    return () => observer.current?.disconnect();
  }, [threshold]);

  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    if (el) {
      el.dataset.index = String(index);
      observer.current?.observe(el);
    }
  };

  return { isOnScreen, setRef };
};

const Films = () => {
  const [films, setFilms] = useState<FilmProjectProps[]>([]);
  const [hoveredFilm, setHoveredFilm] = useState<string | null>(null);
  const { isOnScreen, setRef } = useIsOnScreen();

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const q = query(
          collection(db, "films"),
          orderBy("year", "desc"),
          limit(3),
        );
        const snapshot = await getDocs(q);
        const fetchedFilms = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<FilmProjectProps, "id">),
        }));

        setFilms(fetchedFilms);
      } catch (error) {
        console.error("Error fetching films:", error);
      }
    };

    fetchFilms();
  }, []);

  return (
    <section id="films" className="relative p-gap-md md:p-gap-xxl w-full">
      {/* Background gradients */}
      <div className="hidden md:block absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-secondary-muted via-transparent via-45% to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary-muted via-transparent via-55% to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent-more-muted via-transparent via-50% to-transparent pointer-events-none"></div>

      <div className="space-y-gap-lg relative z-10">
        <h2 className="hidden md:block text-3xl md:text-4xl">Featured Films</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gap-md">
          <Suspense fallback={<div className="animate-pulse bg-gray-200 aspect-[2/3] rounded-xl"></div>}>
              <LazyFilmCard
            <div
                film={film}
                index={index}
                isOnScreen={isOnScreen.has(index)}
                setRef={setRef(index)}
                hoveredFilm={hoveredFilm}
                setHoveredFilm={setHoveredFilm}
              />
            </div>
          ))}
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Films;
