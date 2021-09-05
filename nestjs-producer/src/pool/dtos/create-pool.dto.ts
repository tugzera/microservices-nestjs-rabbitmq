import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';

import { CreatePoolOptionsDto } from './create-pool-options.dto';

export class CreatePoolDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsArray()
  @ArrayMinSize(2)
  @ValidateNested({ each: true })
  @Type(() => CreatePoolOptionsDto)
  options: CreatePoolOptionsDto[];
}
