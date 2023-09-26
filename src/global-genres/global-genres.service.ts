import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateGlobalGenreDto } from './dto/create-global-genre.dto';
import { UpdateGlobalGenreDto } from './dto/update-global-genre.dto';

@Injectable()
export class GlobalGenresService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateGlobalGenreDto) {
    return await this.prisma.globalGenre.create({ data: dto });
  }

  async findAll() {
    return await this.prisma.globalGenre.findMany({ orderBy: { name: 'asc' } });
  }

  async findOne(id: string) {
    return await this.prisma.globalGenre.findUniqueOrThrow({ where: { id } });
  }

  async update(id: string, dto: UpdateGlobalGenreDto) {
    return await this.prisma.globalGenre.update({
      where: { id },
      data: { ...dto, updatedAt: new Date() },
    });
  }

  async remove(id: string) {
    return await this.prisma.globalGenre.delete({ where: { id } });
  }
}
