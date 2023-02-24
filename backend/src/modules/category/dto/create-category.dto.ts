import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateCategoryDto {
  @MaxLength(20)
  @IsNotEmpty()
  name: string;

  @MaxLength(200)
  @IsNotEmpty()
  image: string;

  @IsNotEmpty()
  @MaxLength(1500)
  description: boolean;
}
