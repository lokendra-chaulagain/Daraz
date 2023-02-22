import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateCategoryDto {
  @MaxLength(20)
  @IsNotEmpty()
  name: string;

  @MaxLength(50)
  @IsNotEmpty()
  imageUrl: string;

  @IsNotEmpty()
  isActive: boolean;
}
