import { useIsOnScreen } from "@/hooks/useIsOnScreen";
import BlurText from "@/components/BlurText";

const Hero = () => {
  const { isOnScreen } = useIsOnScreen();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden w-full"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/jasmijn-hero-comp.jpg"
          alt="hero-image"
          className="absolute top-0 left-0 h-full object-cover max-md:object-[-22rem] object-top"
        />
        <div className="fixed top-0 right-0 h-screen w-[60vw] bg-gradient-to-l from-[var(--background)] to-transparent"></div>
      </div>

      {/* Desktop Gradients */}
      <div className="fixed top-0 right-0 h-screen w-[60vw] bg-gradient-to-l from-[var(--background)] to-transparent"></div>
      <div className="absolute inset-y-0 left-0 w-28 md:bg-gradient-to-r from-[var(--background)] to-transparent"></div>

      {/* All Gradients */}
      <div className="absolute inset-0 md:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[var(--primary-muted)] via-transparent to-transparent via-30% md:via-40% pointer-events-none"></div>
      <div className="absolute inset-0 md:bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[var(--secondary-more-muted)] via-transparent to-transparent via-50% pointer-events-none"></div>

      {/* Content */}
      <div className="z-10 w-full px-12 text-center md:text-right flex flex-col items-center md:items-end md:px-36">
        <h1>
          <BlurText
            text="Jasmijn Schrofer"
            delay={300}
            animateBy="words"
            direction="top"
            className="font-playfair text-4xl md:text-7xl lg:text-7xl font-bold mb-6 text-[var(--text)]"
          />
        </h1>
        <p
          className={`font-serif italic text-xl md:text-2xl text-[var(--text-muted)] mb-4 md:mb-8 observed ${isOnScreen ? "on-screen" : "off-screen-right"} delay-300`}
        >
          Film Director
        </p>
        <p
          className={`max-w-2xl text-lg text-[var(--text-more-muted)] mb-4 md:mb-8 observed ${isOnScreen ? "on-screen" : "off-screen-right"} delay-500`}
        >
          A Dutch/Chinese American documentary filmmaker based in Amsterdam,
          renowned for visually poetic storytelling and exploration of profound
          themes. My work often intertwines themes of spirituality, culture, and
          human connection.
        </p>
        <a
          href="#films"
          className="inline-block button-primary hover-lift animate-fadeIn"
          style={{ animationDelay: "1.4s" }}
        >
          Explore My Work
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute w-full bottom-8 px-36 transform -translate-x-1/2 animate-bounce justify-center md:justify-end hidden md:flex">
        <svg
          className="w-6 h-6 text-[var(--foreground-more-muted)]"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
