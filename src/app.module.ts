import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PrismaModule } from './db/prisma.module';
import { GenresModule } from './genres/genres.module';
import { GamesModule } from './games/games.module';
import { GenreGameListsModule } from './genre-game-lists/genre-game-lists.module';

@Module({
  imports: [PrismaModule, GenresModule, GamesModule, GenreGameListsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
