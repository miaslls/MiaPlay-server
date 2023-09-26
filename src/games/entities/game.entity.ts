import { GlobalGenre } from 'src/global-genres/entities/global-genre.entity';

export class Game {
  id: string;
  title: string;
  year: number;
  platform: string;
  imgUrl: string;

  genre?: string;
  rating?: number;
  review?: string;
  dateStarted?: Date;
  dateCompleted?: Date;

  createdAt: Date;
  updatedAt: Date;

  globalGenres: GlobalGenre[];
}
