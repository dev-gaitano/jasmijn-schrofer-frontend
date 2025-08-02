import { AudioLines } from "lucide-react";
import { WorkHeroProps } from "@/types/WorkHero";
import BlurText from "@/components/BlurText";
import { useIsOnScreen } from "@/hooks/useOnScreen";
import { useRef, useEffect, useState } from "react";

const WorkHero: React.FC<WorkHeroProps> = ({
  title,
  category,
  description,
  imagePath,
  videoPath,
}) => {
  const { isOnScreen } = useIsOnScreen();
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      console.log("mad");

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
      className="relative p-gap-md md:p-gap-xxl h-mscreen md:h-screen w-full overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          src={videoPath}
          poster={imagePath}
          preload="metadata"
          loop
          playsInline
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover transition-opacity duration-300"
        />
      </div>

      {/* Desktop Gradients */}
      <div className="md:hidden absolute inset-y-0 w-full bg-gradient-to-t from-background via-transparent to-transparent"></div>

      {/* All Gradients */}
      <div className="absolute inset-0 md:bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-secondary-more-muted via-transparent to-transparent via-50% pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t md:bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-background-muted md:from-background-more-muted to-transparent via-20% md:via-50% pointer-events-none"></div>

      {/* Project Content */}
      <div className="h-full flex flex-col justify-end">
        <div className="max-w-2xl space-y-gap-xs md:space-y-gap-sm">
          <h1>
            <BlurText
              text={title}
              delay={300}
              animateBy="words"
              direction="top"
              className="font-sans text-4xl md:text-7xl lg:text-7xl font-bold text-foreground"
            />
          </h1>

          <p
            className={`font-serif italic text-xl md:text-2xl text-foreground-muted observed ${isOnScreen ? "on-screen" : "off-screen-right"} delay-300`}
          >
            {category}
          </p>

          <p
            className={`max-w-2xl text-sm md:text-lg text-foreground-more-muted observed ${isOnScreen ? "on-screen" : "off-screen-left"} delay-500`}
          >
            {description}
          </p>

          <Link
            to="/work/birth-of-light"
            className="inline-block button-primary hover-lift"
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

      {/* Navigation Arrows */}
      <div className="hidden md:block absolute bottom-1/2 left-4 transform -translate-y-1/2">
        <button className="p-gap-xxs text-foreground-more-muted hover:text-foreground transition-colors duration-300">
          <ChevronLeft size={36} />
        </button>
      </div>
      <div className="hidden md:block absolute bottom-1/2 right-4 transform -translate-y-1/2">
        <button className="p-gap-xxs text-foreground-more-muted hover:text-foreground transition-colors duration-300">
          <ChevronRight size={36} />
        </button>
      </div>
    </section>
  );
};

export default WorkHero;
