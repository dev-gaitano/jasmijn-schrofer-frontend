import { useIsOnScreen } from "@/hooks/useOnScreen";
import CountUp from "@/components/CountUp";

const About = () => {
  const { isOnScreen } = useIsOnScreen();
  const aboutImage =
    "https://res.cloudinary.com/diwkfbsgv/image/upload/c_auto,f_auto,g_auto,q_auto:eco/v1/schrofer/jasmijn-masterclass?_a=BAMAK+Go0";

  return (
    <section id="about" className="relative p-gap-md md:p-gap-xxl w-full">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary-more-muted via-transparent via-50% to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-more-muted via-transparent via-20% to-transparent pointer-events-none"></div>

      <div className="relative z-10 space-y-gap-lg">
        <h2 className="text-3xl md:text-4xl">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gap-lg items-center">
          {/* Image */}
          <div className="aspect-[3/4] rounded-lg overflow-hidden">
            <img
              src={aboutImage}
              alt="Jasmijn Schrofer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-gap-md">
            {/* Bio */}
            <div
              className={`prose prose-invert flex flex-col gap-gap-xs ${isOnScreen ? "off-screen-left -translate-x-0" : "on-screen"}`}
            >
              <p className="max-md:text-sm md:text-lg text-foreground-muted leading-relaxed">
                For over 15 years, I have painted with light and motion,
                crafting cinematic tapestries that transcend borders and speak
                the universal language of emotion. My work—spanning film,
                television, and the creative arts—is a journey through visual
                poetry, cultural metamorphosis, and immersive storytelling.
              </p>
              <p className="max-md:text-sm md:text-lg text-foreground-muted leading-relaxed max-md:hidden">
                Among my creations,{" "}
                <span className="font-serif italic font-bold">
                  Birth of Light
                </span>{" "}
                shines brightly, honored at the Golden Calf Competition and the
                Forum van de Regisseurs at the Netherlands Film Festival, and
                crowned with the Blue Planet Grant Award in Korea. My graduation
                film,
                <span className="font-serif italic font-bold"> Tarikat</span>,
                has echoed across screens worldwide, collecting accolades at
                international festivals—a testament to my dedication to stories
                that linger in the heart long after the screen fades to black.
              </p>
              <p className="max-md:text-sm md:text-lg text-foreground-muted leading-relaxed max-md:hidden">
                With over 50 commissioned projects for visionaries like VPRO,
                Manchester City, El País, and Holland Festival. From intimate
                documentaries to bold visual experiments, every project is a new
                chapter in my exploration of storytelling’s boundless
                possibilities. Through my lens, I seek to illuminate the threads
                that bind us, weaving narratives that resonate deeply and
                transcend the ordinary
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-gap-sm">
              <div className="flex flex-col justify-center items-center gap-gap-xxs text-center glass-panel p-gap-sm hover-lift hover:shadow-lg rounded-lg transition-all ease-in-out duration-500">
                <div className="text-2xl font-bold">
                  <CountUp
                    from={0}
                    to={7}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                </div>
                <div className="text-sm text-foreground-more-muted">
                  Films Directed
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-gap-xxs text-center glass-panel p-gap-sm hover-lift hover:shadow-lg rounded-lg transition-all ease-in-out duration-500">
                <div className="text-2xl font-bold">
                  <CountUp
                    from={0}
                    to={8}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                </div>
                <div className="text-sm text-foreground-more-muted">
                  Awards Won
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-gap-xxs text-center glass-panel p-gap-sm hover-lift hover:shadow-lg rounded-lg transition-all ease-in-out duration-500">
                <div className="text-2xl font-bold flex items-center justify-center gap-1">
                  <CountUp
                    from={0}
                    to={15}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  <p>+</p>
                </div>
                <div className="text-sm text-foreground-more-muted">
                  Years Experience
                </div>
              </div>
            </div>

            {/* Expertise */}
            <div className="space-y-gap-xs">
              <h3 className="text-xl">Expertise</h3>
              <div className="flex flex-wrap gap-gap-xxs">
                {[
                  "Documentaries",
                  "Narrative Films",
                  "Short & Feature Films",
                  "Experimental Films",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-gap-xs py-gap-xxs rounded-full glass-panel, border border-secondary text-secondary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
