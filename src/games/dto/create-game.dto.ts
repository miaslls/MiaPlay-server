import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  IsUrl,
  Max,
  MaxDate,
  Min,
  MinLength,
} from 'class-validator';

export class CreateGameDto {
  @ApiProperty({ description: 'game title' })
  @IsString()
  @MinLength(2)
  title: string;

  @ApiProperty({ description: 'game launch year' })
  @IsNumber({ maxDecimalPlaces: 0 })
  @Min(1958)
  @Max(new Date().getFullYear())
  year: number;

  @ApiProperty({ description: 'game platform' })
  @IsString()
  @MinLength(2)
  platform: string;

  @ApiProperty({ description: 'url of game image' })
  @IsUrl()
  imgUrl: string;

  @ApiProperty({ description: 'game genre' })
  @IsOptional()
  @IsString()
  @MinLength(2)
  genre: string;

  @ApiProperty({ description: 'perceived game rating' })
  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 0 })
  @Min(0)
  @Max(10)
  rating: number;

  @ApiProperty({ description: 'personal game observations' })
  @IsOptional()
  @IsString()
  @MinLength(5)
  review: string;

  @ApiProperty({ description: 'game start date' })
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  @MaxDate(new Date())
  dateStarted: Date;

  @ApiProperty({ description: 'game completion date' })
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  @MaxDate(new Date())
  dateCompleted: Date;

  @IsArray()
  @ArrayMinSize(1)
  @IsUUID(4, { each: true }) // ⚠️
  globalGenres: string[];
}
