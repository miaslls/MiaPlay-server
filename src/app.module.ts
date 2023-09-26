import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PrismaModule } from 'nestjs-prisma';
import { GlobalGenresModule } from './global-genres/global-genres.module';
import { GamesModule } from './games/games.module';

@Module({
  imports: [
    PrismaModule.forRoot({
      isGlobal: true,
    }),
    GlobalGenresModule,
    GamesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
