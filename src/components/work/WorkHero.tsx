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
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${imagePath})`,
        }}
      ></div>
      <div className="absolute inset-0 md:bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[var(--secondary-more-muted)] via-transparent to-transparent via-50% pointer-events-none"></div>
      <div className="absolute inset-0 md:bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[var(--background-more-muted)] via-transparent to-transparent via-50% pointer-events-none"></div>

      {/* Project Content */}
      <div className="relative h-screen flex flex-col justify-end p-[var(--gap-xxl)]">
        <div className="max-w-2xl space-y-4 md:space-y-[var(--gap-sm)]">
          <h1>
            <BlurText
              text={title}
              delay={300}
              animateBy="words"
              direction="top"
              className="font-sans text-4xl md:text-7xl lg:text-7xl font-bold text-[var(--text)]"
            />
          </h1>

          <p
            className={`font-serif italic text-xl md:text-2xl text-[var(--text-muted)] observed ${isOnScreen ? "on-screen" : "off-screen-right"} delay-300`}
          >
            {category}
          </p>

          <p
            className={`max-w-2xl text-lg text-[var(--text-more-muted)] observed ${isOnScreen ? "on-screen" : "off-screen-left"} delay-500`}
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
      <div className="absolute bottom-1/2 left-4 transform -translate-y-1/2">
        <button className="p-[var(--gap-xxs)] text-[var(--foreground-more-muted)] hover:text-[var(--foreground)] transition-colors duration-300">
          <ChevronLeft size={36} />
        </button>
      </div>
      <div className="absolute bottom-1/2 right-4 transform -translate-y-1/2">
        <button className="p-[var(--gap-xxs)] text-[var(--foreground-more-muted)] hover:text-[var(--foreground)] transition-colors duration-300">
          <ChevronRight size={36} />
        </button>
      </div>
    </div>
  );
};

export default WorkHero;
