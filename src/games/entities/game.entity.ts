import { Genre } from 'src/genres/entities/genre.entity';

export class Game {
  id: string;
  title: string;
  description: string;
  year: number;
  imdbScore: number;
  cover_imgUrl: string;
  trailer_youTubeUrl: string;
  gameplay_youTubeUrl: string;
  favorite: boolean;

  genres: Genre[];
}
