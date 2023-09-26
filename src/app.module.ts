import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PrismaModule } from 'nestjs-prisma';
import { GenresModule } from './genres/genres.module';
import { GamesModule } from './games/games.module';
import { GenreGameListsModule } from './genre-game-lists/genre-game-lists.module';

@Module({
  imports: [
    PrismaModule.forRoot({
      isGlobal: true,
    }),
    GenresModule,
    GamesModule,
    GenreGameListsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
