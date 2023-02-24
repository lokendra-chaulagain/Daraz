import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, MaxLength } from 'class-validator';
import { CreateBannerDto } from './create-banner.dto';

export class UpdateBannerDto extends PartialType(CreateBannerDto) {
  @MaxLength(200)
  @IsNotEmpty()
  image: string;
}
