import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
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
    return await this.prisma.game.findUniqueOrThrow({ where: { id } });
  }

  // TODO:
  // async update(id: string, updateGameDto: UpdateGameDto) {
  //   return `This action updates a #${id} game`;
  // }

  async remove(id: string) {
    return await this.prisma.game.delete({ where: { id } });
  }
}
