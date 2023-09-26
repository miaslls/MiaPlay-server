import { Module } from '@nestjs/common';
import { GlobalGenresController } from './global-genres.controller';
import { GlobalGenresService } from './global-genres.service';

@Module({
  controllers: [GlobalGenresController],
  providers: [GlobalGenresService],
})
export class GlobalGenresModule {}
