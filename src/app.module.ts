import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PrismaModule } from './db/prisma.module';
import { GenresModule } from './genres/genres.module';
import { GamesModule } from './games/games.module';

@Module({
  imports: [PrismaModule, GenresModule, GamesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
