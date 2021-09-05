import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';

import { CreatePoolDto } from './dtos';
import { Pool } from './schemas';
import { PoolService } from './pool.service';

@Controller('pool')
export class PoolController {
  constructor(private readonly poolService: PoolService) {}

  @Post()
  async create(
    @Body(ValidationPipe) createPoolDto: CreatePoolDto,
  ): Promise<void> {
    return this.poolService.create(createPoolDto);
  }
}
