import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateSizeDto {
  @IsNotEmpty()
  @MaxLength(3)
  name: string;
}
