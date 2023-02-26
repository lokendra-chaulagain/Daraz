import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateGenreDto {
  @IsNotEmpty()
  @MaxLength(20)
  name: string;

  @IsNotEmpty()
  @MaxLength(200)
  image: string;
}
