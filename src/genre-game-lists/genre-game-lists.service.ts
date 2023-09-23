import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class GenreGameListsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const genresFromDb = await this.prisma.genre.findMany({
      orderBy: { name: 'asc' },
      include: { games: { include: { genres: true } } },
    });

    return genresFromDb
      .map((dbGenre) => ({
        genre: {
          id: dbGenre.id,
          name: dbGenre.name,
        },
        games: dbGenre.games,
      }))
      .filter((genre) => genre.games.length > 0);
  }
}
