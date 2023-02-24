import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import { IsNotEmpty, MaxLength } from 'class-validator';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
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
