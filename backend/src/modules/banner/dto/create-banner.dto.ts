import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateBannerDto {
  @MaxLength(200)
  @IsNotEmpty()
  image: string;
}
