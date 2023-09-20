import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/db/prisma.module';
import { GenresController } from './genres.controller';
import { GenresService } from './genres.service';

@Module({
  imports: [PrismaModule],
  controllers: [GenresController],
  providers: [GenresService],
})
export class GenresModule {}
