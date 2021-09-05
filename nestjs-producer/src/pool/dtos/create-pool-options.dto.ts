import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePoolOptionsDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
