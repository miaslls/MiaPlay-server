import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGenreDto {
  @ApiProperty({ description: 'genre name', example: 'action' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
