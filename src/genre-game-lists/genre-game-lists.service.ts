import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class GenreGameListsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.genre.findMany({
      orderBy: { name: 'asc' },
      include: {
        games: {
          include: { genres: true },
        },
      },
    });
  }
}
