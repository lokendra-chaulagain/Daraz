import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateColorDto {
  @MaxLength(10)
  @IsNotEmpty()
  name: string;
}
