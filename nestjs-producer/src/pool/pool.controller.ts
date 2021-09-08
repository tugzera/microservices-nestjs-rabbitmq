import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';

import { CreatePoolDto } from './dtos';
import { PoolService } from './pool.service';
import { Pool } from './schemas';

@Controller('pool')
export class PoolController {
  constructor(private readonly poolService: PoolService) {}

  @Post()
  async create(
    @Body(ValidationPipe) createPoolDto: CreatePoolDto,
  ): Promise<Pool> {
    return this.poolService.create(createPoolDto);
  }
}
