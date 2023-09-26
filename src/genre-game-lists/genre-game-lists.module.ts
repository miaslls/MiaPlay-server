import { Module } from '@nestjs/common';
import { GenreGameListsService } from './genre-game-lists.service';
import { GenreGameListsController } from './genre-game-lists.controller';

@Module({
  controllers: [GenreGameListsController],
  providers: [GenreGameListsService],
})
export class GenreGameListsModule {}
