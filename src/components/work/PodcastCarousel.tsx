import { useState, useEffect, useRef } from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

interface PodcastEpisode {
  id: number;
  title: string;
  description: string;
  duration: string;
  date: string;
  thumbnail: string;
  category: string;
}

const podcastEpisodes: PodcastEpisode[] = [
  {
    id: 1,
    title: "The Art of Documentary Storytelling",
    description: "Exploring the techniques behind compelling documentary narratives and their impact on audiences.",
    duration: "45:32",
    date: "Nov 15, 2024",
    thumbnail: "/jasmijn-hero-comp.jpg",
    category: "Filmmaking"
  },
  {
    id: 2,
    title: "Cultural Identity in Modern Cinema",
    description: "A deep dive into how contemporary filmmakers address cultural identity and globalization.",
    duration: "38:15",
    date: "Nov 8, 2024",
    thumbnail: "/jasmijn-potrait-comp.jpg",
    category: "Culture"
  },
  {
    id: 3,
    title: "Behind the Scenes: Birth of Light",
    description: "An intimate look at the making of the award-winning documentary about electrification in Kenya.",
    duration: "52:18",
    date: "Nov 1, 2024",
    thumbnail: "/birth-of-light-still-comp.jpg",
    category: "Documentary"
  },
  {
    id: 4,
    title: "The Future of Independent Film",
    description: "Discussing the challenges and opportunities facing independent filmmakers in the digital age.",
    duration: "41:27",
    date: "Oct 25, 2024",
    thumbnail: "/jasmijn-on-set.jpg",
    category: "Industry"
  },
  {
    id: 5,
    title: "Visual Poetry in Cinema",
    description: "How to create emotionally resonant visuals that transcend language and cultural barriers.",
    duration: "36:44",
    date: "Oct 18, 2024",
    thumbnail: "/unfold-poster-comp.jpg",
    category: "Technique"
  },
  {
    id: 6,
    title: "Women in Film: Breaking Barriers",
    description: "Conversations with female filmmakers about representation and opportunities in the industry.",
    duration: "49:13",
    date: "Oct 11, 2024",
    thumbnail: "/tarikat-poster-comp.jpg",
    category: "Industry"
  }
];

const PodcastCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const itemsToShow = 3;
  const maxIndex = podcastEpisodes.length - itemsToShow;

  const startAutoScroll = () => {
    if (intervalRef.current) return;
    
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= maxIndex ? 0 : prevIndex + 1
      );
    }, 4000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (!isHovered) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }

    return () => stopAutoScroll();
  }, [isHovered, maxIndex]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="w-full max-w-7xl mx-auto p-gap-md md:p-gap-xl bg-gradient-to-br from-background via-background to-accent/5">
      <div className="space-y-gap-lg">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-gap-xs">
            <h2 className="text-2xl md:text-3xl font-serif">Podcast Series</h2>
            <p className="text-foreground-muted">
              In-depth conversations about filmmaking, storytelling, and the art of cinema
            </p>
          </div>
          
          {/* Controls */}
          <div className="flex items-center gap-gap-sm">
            <button
              onClick={goToPrev}
              className="p-gap-xs rounded-full bg-background-muted hover:bg-accent/20 transition-colors"
              aria-label="Previous episode"
            >
              <SkipBack className="w-4 h-4" />
            </button>
            <button
              onClick={togglePlay}
              className="p-gap-sm rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
            </button>
            <button
              onClick={goToNext}
              className="p-gap-xs rounded-full bg-background-muted hover:bg-accent/20 transition-colors"
              aria-label="Next episode"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
              width: `${(podcastEpisodes.length / itemsToShow) * 100}%`
            }}
          >
            {podcastEpisodes.map((episode) => (
              <div 
                key={episode.id}
                className="flex-shrink-0 px-gap-sm"
                style={{ width: `${100 / podcastEpisodes.length}%` }}
              >
                <div className="group bg-background/50 backdrop-blur-sm rounded-xl p-gap-md border border-border/50 hover:border-primary/20 transition-all duration-300 hover-lift">
                  {/* Episode Thumbnail */}
                  <div className="relative aspect-square overflow-hidden rounded-lg mb-gap-sm">
                    <img
                      src={episode.thumbnail}
                      alt={episode.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {/* Play overlay */}
                    <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-primary text-primary-foreground rounded-full p-gap-sm">
                        <Play className="w-6 h-6 fill-current" />
                      </div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-gap-xs left-gap-xs bg-accent/90 text-accent-foreground text-xs px-gap-xs py-1 rounded-full">
                      {episode.category}
                    </div>
                  </div>

                  {/* Episode Info */}
                  <div className="space-y-gap-xs">
                    <h3 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-2">
                      {episode.title}
                    </h3>
                    
                    <p className="text-xs text-foreground-muted line-clamp-3">
                      {episode.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-foreground-muted">
                      <span>{episode.date}</span>
                      <span>{episode.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center gap-gap-xxs">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary w-6' 
                  : 'bg-background-muted hover:bg-accent/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PodcastCarousel;