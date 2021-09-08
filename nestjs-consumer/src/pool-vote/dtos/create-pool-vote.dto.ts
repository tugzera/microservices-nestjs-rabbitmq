import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreatePoolVoteDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  poolId: string;

  @IsString()
  @IsNotEmpty()
  poolOptionId: string;
}
