import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GamesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateGameDto) {
    const data = {
      ...dto,
      genres: {
        connect: dto.genres.map((id) => ({ id })),
      },
    };

    return this.prisma.game.create({ data });
  }

  async findAll() {
    return await this.prisma.game.findMany({
      include: { genres: true },
      orderBy: [{ year: 'desc' }, { title: 'asc' }],
    });
  }

  async findOne(id: string) {
    return await this.prisma.game.findUniqueOrThrow({
      where: { id },
      include: { genres: true },
    });
  }

  async update(id: string, dto: UpdateGameDto) {
    let data = {};

    if ('genres' in dto) {
      const gameInDb = await this.prisma.game.findUnique({
        where: { id },
        include: { genres: true },
      });

      const dbGenreIds = gameInDb.genres.map(({ id }) => id);

      const genresToInclude = [];
      const genresToExclude = [];

      dto.genres.forEach((genreInDto) => {
        if (!dbGenreIds.includes(genreInDto)) genresToInclude.push(genreInDto);
      });

      dbGenreIds.forEach((genreInDB) => {
        if (!dto.genres.includes(genreInDB)) genresToExclude.push(genreInDB);
      });

      data = {
        ...dto,
        genres: {
          connect: genresToInclude.map((id) => ({ id })),
          disconnect: genresToExclude.map((id) => ({ id })),
        },
      };
    } else {
      data = { ...dto };
    }

    return this.prisma.game.update({
      data,
      where: { id },
      include: { genres: true },
    });
  }

  async remove(id: string) {
    return await this.prisma.game.delete({ where: { id } });
  }
}
