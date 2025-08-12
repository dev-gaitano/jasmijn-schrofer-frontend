import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar.tsx";
import Footer from "@/components/Footer.tsx";
import { useIsOnScreen } from "@/hooks/useOnScreen";

// Lazy load CountUp component
const CountUp = lazy(() => import("@/components/CountUp"));

const AboutPage = () => {
  const { isOnScreen } = useIsOnScreen();
  const image1 =
    "https://res.cloudinary.com/diwkfbsgv/image/upload/c_auto,f_auto,g_auto,q_auto:eco/v1754490920/jasmijn-on-set_jvtlj2.jpg";
  const image2 =
    "https://res.cloudinary.com/diwkfbsgv/image/upload/c_auto,f_auto,g_auto,q_auto:eco/v1754555817/jasmijn-potrait_c00nhj.jpg";

  return (
    <main className="min-h-screen flex flex-col items-center">
      <Navbar />
      <div className="flex-1">
        <section id="about" className="relative p-gap-md md:p-gap-xxl w-full">
          {/* Background gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-more-muted via-transparent via-50% to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-secondary-more-muted via-transparent via-20% to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary-more-muted via-transparent via-50% to-transparent pointer-events-none"></div>

          <div className="relative z-10 space-y-gap-lg">
            <div className="mt-gap-xl md:mt-0 grid grid-cols-1 md:grid-cols-2 gap-gap-lg items-center">
              {/* Image */}
              <div className="aspect-[3/4] rounded-xl overflow-hidden">
                <img
                  src={image1}
                  alt="Jasmijn Schrofer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="space-y-gap-md">
                {/* Intro */}
                <div
                  className={`prose prose-invert flex flex-col gap-gap-xs ${isOnScreen ? "off-screen-left -translate-x-0" : "on-screen"}`}
                >
                  <h2 className="text-3xl md:text-4xl">Intro</h2>
                  <p className="max-md:text-sm md:text-lg text-foreground-muted leading-relaxed">
                    I’m Jasmijn, a filmmaker who paints with light and motion.
                    My playground stretches from 16 mm grain to bleeding-edge
                    LED volumes, from quiet living-room documentaries to
                    thunderous stadium spots. Wherever I point a lens, I’m
                    chasing the same thing: that electric half-second where an
                    image becomes an emotion and the viewer forgets the screen
                    is even there.
                  </p>
                </div>

                {/* Bio */}
                <div
                  className={`prose prose-invert flex flex-col gap-gap-xs ${isOnScreen ? "off-screen-left -translate-x-0" : "on-screen"}`}
                >
                  <h2 className="text-3xl md:text-4xl">Bio</h2>
                  <p className="max-md:text-sm md:text-lg text-foreground-muted leading-relaxed">
                    Raised between the low-tide silence of the Dutch coast and
                    the kaleidoscopic chaos of Istanbul’s bazaars, I learned
                    early that stories are passports.
                  </p>
                  <p className="max-md:text-sm md:text-lg text-foreground-muted leading-relaxed">
                    After graduating from the Netherlands Film Academy with{" "}
                    <span className="font-serif italic font-bold">
                      Tarikat—a dream-soaked short that went on to screen at 47
                      festivals—
                    </span>
                    I spent a decade directing over 50 commissioned works for
                    VPRO, Manchester City, El País, the Holland Festival, and
                    others. Whether I’m following a Sufi apprentice,
                    choreographing light for an opera stage, or capturing Erling
                    Haaland’s heartbeat in 1000 fps, every project is an
                    excavation of wonder.
                  </p>
                  <p className="max-md:text-sm md:text-lg text-foreground-muted leading-relaxed">
                    I spent a decade directing over 50 commissioned works for
                    VPRO, Manchester City, El País, the Holland Festival, and
                    others. Whether I’m following a Sufi apprentice,
                    choreographing light for an opera stage, or capturing Erling
                    Haaland’s heartbeat in 1000 fps, every project is an
                    excavation of wonder.{" "}
                    <span className="font-serif italic font-bold">
                      Birth of Light,
                    </span>{" "}
                    earned the Blue Planet Grant in Korea, a Golden Calf
                    nomination, and the Forum van de Regisseurs prize—proof,
                    perhaps, that when you dig deep enough, the personal becomes
                    universal.
                  </p>
                </div>
              </div>

              <div className="space-y-gap-md">
                {/* My Process */}
                <div
                  className={`prose prose-invert flex flex-col gap-gap-xs ${isOnScreen ? "off-screen-left -translate-x-0" : "on-screen"}`}
                >
                  <h2 className="text-3xl md:text-4xl">My Process</h2>
                  <p className="max-md:text-sm md:text-lg text-foreground-muted leading-relaxed">
                    Pre-production is archaeology: I dig for the emotional
                    fossils no one else noticed. On set, I treat the camera like
                    a dance partner—hand-held, breath-synced, always one step
                    ahead of the moment.
                  </p>
                  <p className="max-md:text-sm md:text-lg text-foreground-muted leading-relaxed">
                    In post, I swap lenses for timelines, sculpting sound design
                    and color until the footage begins to dream on its own.
                  </p>
                  <p className="max-md:text-sm md:text-lg text-foreground-muted leading-relaxed">
                    The goal is never a “look”; it’s a feeling that lingers like
                    perfume in an empty room.
                  </p>
                </div>

                {/* Awards */}
                <div
                  className={`prose prose-invert flex flex-col gap-gap-xs ${isOnScreen ? "off-screen-left -translate-x-0" : "on-screen"}`}
                >
                  <h2 className="text-3xl md:text-4xl">Awards</h2>
                  <ul className="max-md:text-sm md:text-lg text-foreground-muted leading-relaxed">
                    <li>Blue Planet Grant – Busan, Korea (Birth of Light)</li>
                    <li>
                      Golden Calf Nominee – Netherlands Film Festival (Birth of
                      Light)
                    </li>
                    <li>
                      Forum van de Regisseurs Award – Netherlands Film Festival
                    </li>
                    <li>
                      Best Short Documentary – Hot Docs, Toronto (Tarikat)
                    </li>
                    <li>
                      Student Academy Award – Gold – Los Angeles (Tarikat)
                    </li>
                    <li>CICAE Art Cinema Award – Karlovy Vary IFF</li>
                    <li>Best Cinematography – Camerimage (Commercial Reel)</li>
                  </ul>
                </div>

                {/* Upcoming Screenings */}
                <div
                  className={`prose prose-invert flex flex-col gap-gap-xs ${isOnScreen ? "off-screen-left -translate-x-0" : "on-screen"}`}
                >
                  <h2 className="text-3xl md:text-4xl">Upcoming Screenings</h2>
                  <ul className="max-md:text-sm md:text-lg text-foreground-muted leading-relaxed">
                    <li>
                      Cannes Directors’ Fortnight – Birth of Light (feature
                      sneak-peek) – 18 May 2026
                    </li>
                    <li>
                      Eye Filmmuseum, Amsterdam – Masterclass & retrospective –
                      2–3 June 2026
                    </li>
                    <li>
                      Tate Modern, London – “Light as Language” installation –
                      11 July → 4 Aug 2026
                    </li>
                    <li>
                      Sundance Summer Series – VR companion piece Echoes of
                      Tarikat – 9 Aug 2026
                    </li>
                    <li>
                      IDFA 2026 – Opening Night with live score – 18 Nov 2026
                    </li>
                    <li>
                      Streaming Premiere – MUBI global rollout – Winter 2026/27
                      (exact date TBA)
                    </li>
                  </ul>
                </div>
              </div>
              {/* Image */}
              <div className="aspect-[3/4] rounded-xl overflow-hidden">
                <img
                  src={image2}
                  alt="Jasmijn Schrofer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default AboutPage;
