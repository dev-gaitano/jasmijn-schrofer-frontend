import { AudioLines } from "lucide-react";
import { WorkHeroProps } from "@/types/WorkHero";
import BlurText from "@/components/BlurText";
import { useIsOnScreen } from "@/hooks/useOnScreen";
import { useRef, useEffect, useState, useMemo } from "react";

const WorkHero: React.FC<WorkHeroProps> = ({
  title,
  category,
  description,
  imagePath,
  videoPath,
  playlist,
}) => {
  const { isOnScreen } = useIsOnScreen();
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Compute the top 3 most recent items with valid video paths
  const topThree = useMemo(() => {
    if (!playlist || playlist.length === 0) return undefined;
    return [...playlist]
      .filter((item) => !!item.videoPath)
      .sort((a, b) => b.year - a.year)
      .slice(0, 3);
  }, [playlist]);

  const active = topThree && topThree.length > 0 ? topThree[currentIndex] : undefined;

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;

      setIsMuted(true);
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (isOnScreen) {
      video.currentTime = 0;
      video.play().catch(() => {}); // handle autoplay restrictions silently
    } else {
      video.pause();
    }
  }, [isOnScreen]);

  // Advance to next trailer when current ends
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onEnded = () => {
      if (topThree && topThree.length > 1) {
        setCurrentIndex((i) => (i + 1) % topThree.length);
      }
    };
    video.addEventListener("ended", onEnded);
    return () => {
      video.removeEventListener("ended", onEnded);
    };
  }, [topThree]);

  // Reload and play when active video changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    if (isOnScreen) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  }, [active?.videoPath, isOnScreen]);

  const toggleMute = () => {
    const video = videoRef.current;

    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);

      if (!video.muted) {
        video.play().catch((err) => {
          console.warn("Playback failed after unmuting", err);
        });
      }
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
          ref={videoRef}
          src={active?.videoPath ?? videoPath}
          poster={active?.imagePath ?? imagePath}
          preload="metadata"
          loop={!(topThree && topThree.length > 1)}
          playsInline
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
              text={active?.title ?? title}
              delay={300}
              animateBy="words"
              direction="top"
              className="text-4xl md:text-7xl lg:text-7xl"
            />
          </h1>
          <p
            className={`font-serif italic text-xl md:text-2xl text-foreground-muted observed ${isOnScreen ? "on-screen" : "off-screen-right"} delay-300`}
          >
            {active?.category ?? category}
          </p>
          <p
            className={`hidden md:block max-w-2xl max-md:text-sm md:text-lg text-foreground-more-muted observed ${isOnScreen ? "on-screen" : "off-screen-right"} delay-500`}
          >
            {active?.description ?? description}
          </p>

          <p
            className={`md:hidden max-md:text-sm md:text-lg text-foreground-more-muted observed ${isOnScreen ? "on-screen" : "off-screen-right"} delay-500`}
          >
            {active?.description ?? description}
          </p>
        </div>

        <div className="mt-gap-sm md:mt-gap-md w-full flex items-center justify-between">
          <a
            href={active?.link ?? "/work/birth-of-light"}
            className="inline-block button-primary hover-lift animate-fadeIn"
            style={{ animationDelay: "1.4s" }}
          >
            Watch Now
          </a>
          {/* Audio Control */}
          <button
            className={`cursor-pointer ${isMuted ? "text-foreground-more-muted" : "text-primary-muted"} hover:text-primary-muted transition-all duration-500`}
            onClick={toggleMute}
          >
            <AudioLines />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkHero;
