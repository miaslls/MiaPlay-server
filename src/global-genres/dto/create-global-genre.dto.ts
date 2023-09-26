import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateGlobalGenreDto {
  @ApiProperty({ description: 'global genre name' })
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;
}
