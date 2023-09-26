import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GlobalGenresService } from './global-genres.service';
import { CreateGlobalGenreDto } from './dto/create-global-genre.dto';
import { UpdateGlobalGenreDto } from './dto/update-global-genre.dto';

@ApiTags('global-genres')
@Controller('global-genres')
export class GlobalGenresController {
  constructor(private readonly genresService: GlobalGenresService) {}

  @Post()
  @ApiOperation({ summary: 'create global genre' })
  create(@Body() createGenreDto: CreateGlobalGenreDto) {
    return this.genresService.create(createGenreDto);
  }

  @Get()
  @ApiOperation({ summary: 'find all global  genres' })
  findAll() {
    return this.genresService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'find global genre by id' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.genresService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'update global genre by id' })
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateGenreDto: UpdateGlobalGenreDto) {
    return this.genresService.update(id, updateGenreDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'delete global genre by id' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.genresService.remove(id);
  }
}
