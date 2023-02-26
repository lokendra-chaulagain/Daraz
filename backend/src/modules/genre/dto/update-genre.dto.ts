import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, MaxLength } from 'class-validator';
import { CreateGenreDto } from './create-genre.dto';

export class UpdateGenreDto extends PartialType(CreateGenreDto) {
  @IsNotEmpty()
  @MaxLength(10)
  name: string;

  @IsNotEmpty()
  @MaxLength(200)
  image: string;
}
