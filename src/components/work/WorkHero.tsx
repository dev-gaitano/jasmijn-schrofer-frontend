import { AudioLines } from "lucide-react";
import { WorkHeroProps, WorkHeroItem } from "@/types/WorkHero";
import BlurText from "@/components/BlurText";
import { useIsOnScreen } from "@/hooks/useOnScreen";
import { useRef, useEffect, useState, useMemo, useCallback } from "react";

import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase-config";
import { FilmProjectProps } from "@/types/FilmProject";

const WorkHero: React.FC<WorkHeroProps> = ({
  title,
  category,
  description,
  imagePath,
  videoPath,
}) => {
  const { isOnScreen } = useIsOnScreen();
  const [isMuted, setIsMuted] = useState(true);
  const videoElementRef = useRef<HTMLVideoElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [films, setFilms] = useState<FilmProjectProps[]>([]);

  // Fetch films from Firestore
  useEffect(() => {
    const fetchFilmsFromFirestore = async () => {
      try {
        const filmsQuery = query(
          collection(db, "films"),
          orderBy("year", "desc"),
        );
        const querySnapshot = await getDocs(filmsQuery);
        const fetchedFilms = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as FilmProjectProps),
        }));

        setFilms(fetchedFilms.filter((film) => film.trailer).slice(0, 3));
      } catch (err) {
        console.error("Error fetching films:", err);
      }
    };
    fetchFilmsFromFirestore();
  }, []);

  // Build items list from fetched films or fallback props
  const items: WorkHeroItem[] = useMemo(() => {
    if (films.length > 0) {
      return films.map((film) => ({
        title: film.title,
        category: Array.isArray(film.category)
          ? film.category.join(", ")
          : film.category,
        description: film.description,
        imagePath: film.thumbnail,
        videoPath: film.trailer,
        year: parseInt(film.year),
        link: `/work/${film.id}`,
      }));
    }
    if (title && category && description && imagePath && videoPath) {
      return [
        {
          title,
          category,
          description,
          imagePath,
          videoPath,
          year: 0,
          link: "/",
        },
      ];
    }
    return [];
  }, [films, title, category, description, imagePath, videoPath]);

  const topThreeItems = items.slice(0, 3);
  const activeItem =
    topThreeItems.length > 0 ? topThreeItems[currentIndex] : undefined;

  // Ref callback to apply autoplay-friendly attributes
  const handleVideoRef = useCallback(
    (element: HTMLVideoElement | null) => {
      videoElementRef.current = element;
      if (!element) return;

      element.muted = isMuted;
      element.autoplay = true;
      element.playsInline = true;
      element.crossOrigin = "anonymous";
      try {
        element.setAttribute("webkit-playsinline", "true");
      } catch {
        /* no-op */
      }
    },
    [isMuted],
  );

  const attemptToPlayVideo = useCallback(
    async (videoElement: HTMLVideoElement | null) => {
      if (!videoElement) return false;
      try {
        await videoElement.play();
        return true;
      } catch (error) {
        console.warn("Video playback failed", error);
        return false;
      }
    },
    [],
  );

  // Play or pause video depending on visibility
  useEffect(() => {
    const videoElement = videoElementRef.current;
    if (!videoElement) return;

    if (isOnScreen) {
      videoElement.muted = isMuted;
      videoElement.currentTime = 0;
      void attemptToPlayVideo(videoElement);
    } else {
      videoElement.pause();
    }
  }, [isOnScreen, attemptToPlayVideo, isMuted]);

  // Reload and play video when source changes
  useEffect(() => {
    const videoElement = videoElementRef.current;
    if (!videoElement) return;

    videoElement.load();
    if (isOnScreen) {
      videoElement.currentTime = 0;
      const timeoutId = window.setTimeout(
        () => void attemptToPlayVideo(videoElement),
        50,
      );
      return () => clearTimeout(timeoutId);
    }
  }, [activeItem?.videoPath, isOnScreen, attemptToPlayVideo]);

  // Handle video end event for cycling
  useEffect(() => {
    const videoElement = videoElementRef.current;
    if (!videoElement) return;

    const handleEnded = () => {
      if (topThreeItems.length > 1) {
        setCurrentIndex((index) => (index + 1) % topThreeItems.length);
      }
    };

    videoElement.addEventListener("ended", handleEnded);
    return () => {
      videoElement.removeEventListener("ended", handleEnded);
    };
  }, [topThreeItems]);

  const handleCanPlay = () => {
    const videoElement = videoElementRef.current;
    if (!videoElement) return;
    if (isOnScreen) {
      void attemptToPlayVideo(videoElement);
    }
  };

  const toggleMute = async () => {
    const videoElement = videoElementRef.current;
    if (!videoElement) return;

    const newMuteState = !videoElement.muted;
    videoElement.muted = newMuteState;
    setIsMuted(newMuteState);

    try {
      await videoElement.play();
    } catch (error) {
      console.warn("Playback failed after toggling mute", error);
    }
  };

  return (
    <section
      id="work-hero"
      className="relative p-gap-md md:p-gap-xxl h-mscreen md:h-screen flex items-end justify-center overflow-hidden w-full"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={handleVideoRef}
          src={activeItem?.videoPath ?? videoPath}
          poster={activeItem?.imagePath ?? imagePath}
          preload="auto"
          loop={!(topThreeItems.length > 1)}
          playsInline
          muted={isMuted}
          autoPlay
          onCanPlay={handleCanPlay}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover transition-opacity duration-300"
        />
      </div>

      {/* Desktop Gradients */}
      <div className="md:hidden absolute inset-y-0 w-full bg-gradient-to-t from-background via-transparent to-transparent"></div>

      {/* All Gradients */}
      <div className="absolute inset-0 md:bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-background via-transparent to-transparent via-50% pointer-events-none"></div>

      {/* Content */}
      <div className="z-10 w-full flex flex-col items-start">
        <div className="text-left w-full flex flex-col items-start gap-gap-xxs md:gap-gap-xs">
          <h1>
            <BlurText
              text={activeItem?.title ?? title}
              delay={300}
              animateBy="words"
              direction="top"
              className="text-4xl md:text-7xl lg:text-7xl"
            />
          </h1>
          <p
            className={`font-serif italic text-xl md:text-2xl text-foreground-muted observed ${
              isOnScreen ? "on-screen" : "off-screen-right"
            } delay-300`}
          >
            {activeItem?.category ?? category}
          </p>
          <p
            className={`max-w-2xl max-md:text-sm md:text-lg text-foreground-more-muted observed ${
              isOnScreen ? "on-screen" : "off-screen-right"
            } delay-500`}
          >
            {activeItem?.description ?? description}
          </p>
        </div>

        <div className="mt-gap-sm md:mt-gap-md w-full flex items-center justify-between">
          <a
            href={activeItem?.link ?? "/work/birth-of-light"}
            className="inline-block button-primary hover-lift animate-fadeIn"
            style={{ animationDelay: "1.4s" }}
          >
            Watch Now
          </a>
          {/* Audio Control */}
          <button
            className={`cursor-pointer ${
              isMuted ? "text-foreground-more-muted" : "text-primary-muted"
            } hover:text-primary-muted transition-all duration-500`}
            onClick={toggleMute}
            aria-pressed={!isMuted}
            aria-label={isMuted ? "Unmute trailer" : "Mute trailer"}
          >
            <AudioLines />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkHero;
