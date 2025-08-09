import { useState } from "react";
import { Play, Pause } from "lucide-react";
import { PodcastEpisodeProps } from "@/types/PodcastEpisode";

const podcastEpisodes: PodcastEpisodeProps[] = [
  {
    id: 1,
    title: "The Art of Documentary Storytelling",
    description:
      "Exploring the techniques behind compelling documentary narratives and their impact on audiences.",
    duration: "45:32",
    date: "Nov 15, 2024",
    thumbnail:
      "https://i.pinimg.com/1200x/7b/dd/9d/7bdd9df3ee33da354e6a61014e199ca7.jpg",
    category: "Filmmaking",
  },
  {
    id: 2,
    title: "Cultural Identity in Modern Cinema",
    description:
      "A deep dive into how contemporary filmmakers address cultural identity and globalization.",
    duration: "38:15",
    date: "Nov 8, 2024",
    thumbnail:
      "https://i.pinimg.com/1200x/7b/dd/9d/7bdd9df3ee33da354e6a61014e199ca7.jpg",
    category: "Culture",
  },
  {
    id: 3,
    title: "Behind the Scenes: Birth of Light",
    description:
      "An intimate look at the making of the award-winning documentary about electrification in Kenya.",
    duration: "52:18",
    date: "Nov 1, 2024",
    thumbnail:
      "https://i.pinimg.com/1200x/7b/dd/9d/7bdd9df3ee33da354e6a61014e199ca7.jpg",
    category: "Documentary",
  },
  {
    id: 4,
    title: "The Future of Independent Film",
    description:
      "Discussing the challenges and opportunities facing independent filmmakers in the digital age.",
    duration: "41:27",
    date: "Oct 25, 2024",
    thumbnail:
      "https://i.pinimg.com/1200x/7b/dd/9d/7bdd9df3ee33da354e6a61014e199ca7.jpg",
    category: "Industry",
  },
  {
    id: 5,
    title: "Visual Poetry in Cinema",
    description:
      "How to create emotionally resonant visuals that transcend language and cultural barriers.",
    duration: "36:44",
    date: "Oct 18, 2024",
    thumbnail:
      "https://i.pinimg.com/1200x/7b/dd/9d/7bdd9df3ee33da354e6a61014e199ca7.jpg",
    category: "Technique",
  },
  {
    id: 6,
    title: "Women in Film: Breaking Barriers",
    description:
      "Conversations with female filmmakers about representation and opportunities in the industry.",
    duration: "49:13",
    date: "Oct 11, 2024",
    thumbnail:
      "https://i.pinimg.com/1200x/7b/dd/9d/7bdd9df3ee33da354e6a61014e199ca7.jpg",
    category: "Industry",
  },
];

const PodcastCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section
      id="podcast-section"
      className="w-full mx-auto p-gap-md md:px-gap-xxl"
    >
      <div className="space-y-gap-lg">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-gap-xs">
            <h2 className="text-3xl md:text-4xl">Podcast Series</h2>
            <p className="text-foreground-muted">
              In-depth conversations about filmmaking, storytelling, and the art
              of cinema
            </p>
          </div>

          {/* Controls */}
          <div className="hidden md:flex items-center gap-gap-sm">
            <button
              onClick={togglePlay}
              className="p-gap-sm rounded-full button-primary"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 fill-current" />
              )}
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`flex gap-gap-xxl md:gap-gap-md ${!isHovered ? "animate-smooth-scroll" : "animate-smooth-scroll-paused"}`}
            style={{
              width: `${(podcastEpisodes.length * 2 * 100) / 3}%`, // Double the episodes for seamless loop
            }}
          >
            {/* First set of episodes */}
            {podcastEpisodes.map((episode) => (
              <div
                key={`first-${episode.id}`}
                style={{ width: `${100 / (podcastEpisodes.length * 2)}%` }}
              >
                <div className="h-52 md:h-36 md:glass-panel hover-lift group relative flex items-end md:items-center justify-center gap-gap-sm rounded-xl md:py-gap-sm md:pr-gap-sm transition-all duration-500">
                  {/* Episode Thumbnail */}
                  <div className="absolute md:relative w-52 md:w-36 h-52 md:h-36 overflow-hidden rounded-xl shrink-0">
                    <img
                      src={episode.thumbnail}
                      alt={episode.title}
                      className="w-full h-full object-cover [mask-image:linear-gradient(to_bottom,background,transparent)] md:[mask-image:linear-gradient(to_right,background,transparent)]"
                    />
                  </div>

                  {/* Episode Info */}
                  <div className="z-10 mb-gap-xs md:mb-0 px-gap-xs md:px-0 flex flex-col justify-between gap-gap-xxs md:h-[96px] w-52 md:w-[540px]">
                    <h3 className="w-[176px] md:w-full font-serif italic text-md group-hover:text-primary transition-colors line-clamp-2">
                      {episode.title}
                    </h3>

                    <p className="hidden md:block text-xs text-foreground-muted line-clamp-3">
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

            {/* Duplicate set for seamless loop */}
            {podcastEpisodes.map((episode) => (
              <div
                key={`first-${episode.id}`}
                style={{ width: `${100 / (podcastEpisodes.length * 2)}%` }}
              >
                <div className="h-52 md:h-36 md:glass-panel hover-lift group relative flex items-end md:items-center justify-center gap-gap-sm bg-background/50 backdrop-blur-sm rounded-xl md:py-gap-sm md:pr-gap-sm transition-all duration-500">
                  {/* Episode Thumbnail */}
                  <div className="absolute md:relative w-52 md:w-36 h-52 md:h-36 overflow-hidden rounded-xl shrink-0">
                    <img
                      src={episode.thumbnail}
                      alt={episode.title}
                      className="w-full h-full object-cover [mask-image:linear-gradient(to_bottom,background,transparent)] md:[mask-image:linear-gradient(to_right,background,transparent)]"
                    />
                  </div>

                  {/* Episode Info */}
                  <div className="z-10 mb-gap-xs md:mb-0 px-gap-xs md:px-0 flex flex-col justify-between gap-gap-xxs md:h-[96px] w-52 md:w-[540px]">
                    <h3 className="w-[176px] md:w-full font-serif italic text-md group-hover:text-primary transition-colors line-clamp-2">
                      {episode.title}
                    </h3>

                    <p className="hidden md:block text-xs text-foreground-muted line-clamp-3">
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
      </div>
    </section>
  );
};

export default PodcastCarousel;
