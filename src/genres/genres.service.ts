import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Injectable()
export class GenresService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateGenreDto) {
    return await this.prisma.genre.create({ data: dto });
  }

  async findAll() {
    return await this.prisma.genre.findMany({ orderBy: { name: 'asc' } });
  }

  async findOne(id: string) {
    return await this.prisma.genre.findUniqueOrThrow({ where: { id } });
  }

  async update(id: string, dto: UpdateGenreDto) {
    return await this.prisma.genre.update({ where: { id }, data: dto });
  }

  async remove(id: string) {
    return await this.prisma.genre.delete({ where: { id } });
  }
}
