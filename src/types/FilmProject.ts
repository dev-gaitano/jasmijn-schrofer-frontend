export interface FilmProjectProps {
  id: number;
  title: string;
  year: string;
  category: string[];
  runtime: string;
  thumbnail: string;
  description: string;
  awards?: string[];
}
