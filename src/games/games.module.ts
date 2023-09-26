import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';

@Module({
  imports: [PrismaModule],
  controllers: [GamesController],
  providers: [GamesService],
})
export class GamesModule {}
