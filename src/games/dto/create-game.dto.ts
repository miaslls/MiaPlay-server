import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  Max,
  Min,
  MinLength,
} from 'class-validator';
import { UUID } from 'crypto';

export class CreateGameDto {
  @ApiProperty({ description: 'game title' })
  @IsString()
  @MinLength(2)
  title: string;

  @ApiProperty({ description: 'game description' })
  @IsString()
  @MinLength(5)
  description: string;

  @ApiProperty({ description: 'game launch year' })
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 0 })
  @Min(1958)
  @Max(new Date().getFullYear())
  year: number;

  @ApiProperty({ description: 'game score on IMDb' })
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 1 })
  @Min(0)
  @Max(10)
  imdbScore: number;

  @ApiProperty({ description: 'url of game cover image' })
  @IsUrl()
  cover_imgUrl: string;

  @ApiProperty({ description: 'url of trailer on YouTube' })
  @IsUrl()
  trailer_youTubeUrl: string;

  @ApiProperty({ description: 'url of gameplay video on YouTube' })
  @IsUrl()
  gameplay_youTubeUrl: string;

  @IsArray()
  @ArrayMinSize(1)
  genres: string[];
}
