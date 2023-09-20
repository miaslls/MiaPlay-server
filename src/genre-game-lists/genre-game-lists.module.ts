import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/db/prisma.module';
import { GenreGameListsService } from './genre-game-lists.service';
import { GenreGameListsController } from './genre-game-lists.controller';

@Module({
  imports: [PrismaModule],
  controllers: [GenreGameListsController],
  providers: [GenreGameListsService],
})
export class GenreGameListsModule {}
