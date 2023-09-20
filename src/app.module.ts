import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PrismaModule } from './db/prisma.module';
import { GenresModule } from './genres/genres.module';

@Module({
  imports: [PrismaModule, GenresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
