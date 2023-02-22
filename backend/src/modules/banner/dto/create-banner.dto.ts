import { IsNotEmpty } from 'class-validator';

export class CreateBannerDto {
  @IsNotEmpty()
  imageUrl: string;

  isActive: boolean;
}
