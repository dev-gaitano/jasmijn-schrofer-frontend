import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { WorkHeroProps } from "@/types/WorkHero";
import BlurText from "@/components/BlurText";
import { useIsOnScreen } from "@/hooks/useOnScreen";

const WorkHero: React.FC<WorkHeroProps> = ({
  title,
  category,
  description,
  imagePath,
}) => {
  const { isOnScreen } = useIsOnScreen();

  return (
    <section
      id="work-hero"
      className="relative p-gap-md md:p-gap-xxl h-mscreen md:h-screen w-full overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${imagePath})`,
        }}
      ></div>
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
          </Link>
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
