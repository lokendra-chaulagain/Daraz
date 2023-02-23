import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateSearchTagDto {
  @MaxLength(20)
  @IsNotEmpty()
  name: string;
}
