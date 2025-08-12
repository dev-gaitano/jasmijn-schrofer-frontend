export interface WorkHeroItem {
  title: string;
  category: string;
  description: string;
  imagePath: string;
  videoPath: string;
  year: number;
  film?: string;
}

export interface WorkHeroProps {
  title?: string;
  category?: string;
  description?: string;
  imagePath?: string;
  videoPath?: string;
}
