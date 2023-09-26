import { Game } from 'src/games/entities/game.entity';

export class GlobalGenre {
  id: string;
  name: string;

  createdAt: Date;
  updatedAt: Date;

  games: Game[];
}
