import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GenreGameListsService } from './genre-game-lists.service';

@ApiTags('genre-game-lists')
@Controller('genre-game-lists')
export class GenreGameListsController {
  constructor(private readonly genreGameListsService: GenreGameListsService) {}

  @Get()
  @ApiOperation({ summary: 'find all genre game lists (this is a legacy endpoint)' })
  findAll() {
    return this.genreGameListsService.findAll();
  }
}
