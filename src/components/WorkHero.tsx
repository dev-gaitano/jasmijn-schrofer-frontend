import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface WorkHeroProps {
  title: string;
  category: string;
  description: string;
  imagePath: string;
}

const WorkHero: React.FC<WorkHeroProps> = ({
  title,
  category,
  description,
  imagePath,
}) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${imagePath})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-portfolio-dark/90 to-portfolio-dark/40"></div>
      </div>

      {/* Project Content */}
      <div className="relative h-screen flex flex-col justify-end px-8 md:px-20 pb-24">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-7xl lg:text-7xl font-bold mb-6 text-white">
            {title}
          </h1>
          <div className="font-serif italic text-xl md:text-2xl text-white/80 mb-4 md:mb-8">
            {category}
          </div>
          <p className="max-w-2xl text-lg text-white/70 mb-4 md:mb-8">
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
        <button className="p-2 text-portfolio-gray hover:text-portfolio-light transition-colors">
          <ChevronLeft size={36} />
        </button>
      </div>
      <div className="absolute bottom-1/2 right-4 transform -translate-y-1/2">
        <button className="p-2 text-portfolio-gray hover:text-portfolio-light transition-colors">
          <ChevronRight size={36} />
        </button>
      </div>
    </div>
  );
};

export default WorkHero;
