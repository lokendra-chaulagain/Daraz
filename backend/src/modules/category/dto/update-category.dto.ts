import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import { IsNotEmpty, MaxLength } from 'class-validator';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
  @MaxLength(20)
  @IsNotEmpty()
  name: string;

  @MaxLength(50)
  @IsNotEmpty()
  imageUrl: string;

  @IsNotEmpty()
  isActive: boolean;
}
