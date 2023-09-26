import { PartialType } from '@nestjs/swagger';
import { CreateGlobalGenreDto } from './create-global-genre.dto';

export class UpdateGlobalGenreDto extends PartialType(CreateGlobalGenreDto) {}
