export interface WorkHeroItem {
  title: string;
  category: string;
  description: string;
  imagePath: string;
  videoPath: string; // URL to trailer video
  year: number; // used for sorting most to least recent
  link?: string; // optional link for "Watch Now"
}

export interface WorkHeroProps {
  // Single item (kept for backwards compatibility)
  title: string;
  category: string;
  description: string;
  imagePath: string;
  videoPath: string;

  // Optional playlist: if provided, the hero will cycle through the top 3 most recent items
  playlist?: WorkHeroItem[];
}
