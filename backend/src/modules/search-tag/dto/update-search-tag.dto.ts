import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, MaxLength } from 'class-validator';
import { CreateSearchTagDto } from './create-search-tag.dto';

export class UpdateSearchTagDto extends PartialType(CreateSearchTagDto) {
  @MaxLength(20)
  @IsNotEmpty()
  name: string;
}
