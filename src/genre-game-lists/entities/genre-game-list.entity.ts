import { Game } from 'src/games/entities/game.entity';
import { Genre } from 'src/genres/entities/genre.entity';

export class GenreGameList {
  genre: Genre;
  games: Game[];
}
