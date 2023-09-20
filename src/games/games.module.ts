import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/db/prisma.module';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';

@Module({
  imports: [PrismaModule],
  controllers: [GamesController],
  providers: [GamesService],
})
export class GamesModule {}
