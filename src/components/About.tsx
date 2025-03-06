import { User, Award, Film } from "lucide-react";
import { parse } from "path";

const About = () => {
  return (
    <section id="about" className="relative py-24 w-full">
      {/* Background gradients */}
      {/* <div className="absolute inset-0 bg-gradient-to-bl from-background via-background to-black/50 pointer-events-none"></div> */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-accent/40 via-transparent via-50% to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/30 via-transparent via-20% to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/40 via-transparent via-50% to-transparent pointer-events-none"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-lg overflow-hidden">
              <img
                src="/jasmijn-potraight.jpg"
                alt="Jasmijn Schrofer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full border-2 border-primary/30 rounded-lg"></div> */}
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="prose prose-invert flex flex-col gap-2">
              <p className="text-lg text-white/80 leading-relaxed">
                For over 15 years, I have painted with light and motion,
                crafting cinematic tapestries that transcend borders and speak
                the universal language of emotion. My work—spanning film,
                television, and the creative arts—is a journey through visual
                poetry, cultural metamorphosis, and immersive storytelling.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Among my creations,{" "}
                <span className="italic font-bold">Birth of Light</span> shines
                brightly, honored at the Golden Calf Competition and the Forum
                van de Regisseurs at the Netherlands Film Festival, and crowned
                with the Blue Planet Grant Award in Korea. My graduation film,
                <span className="italic font-bold">Tarikat</span>, has echoed
                across screens worldwide, collecting accolades at international
                festivals—a testament to my dedication to stories that linger in
                the heart long after the screen fades to black.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="glass-panel p-6 text-center">
                <Film className="w-6 h-6 text-gold mx-auto mb-2" />
                <div className="text-2xl font-bold mb-1">15+</div>
                <div className="text-sm text-white/60">Films Directed</div>
              </div>
              <div className="glass-panel p-6 text-center">
                <Award className="w-6 h-6 text-gold mx-auto mb-2" />
                <div className="text-2xl font-bold mb-1">8</div>
                <div className="text-sm text-white/60">Awards Won</div>
              </div>
              <div className="glass-panel p-6 text-center">
                <User className="w-6 h-6 text-gold mx-auto mb-2" />
                <div className="text-2xl font-bold mb-1">15+</div>
                <div className="text-sm text-white/60">Years Experience</div>
              </div>
            </div>

            {/* Expertise */}
            <div className="space-y-4">
              <h3 className="text-xl font-playfair font-bold">Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Documentary",
                  "Narrative Film",
                  "Short Films",
                  "Experimental",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-sm text-secondary"
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
