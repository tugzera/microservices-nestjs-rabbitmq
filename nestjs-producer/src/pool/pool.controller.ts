import { Body, Controller, Get, Param, Post, ValidationPipe } from '@nestjs/common';

import { CreatePoolDto } from './dtos';
import { PoolService } from './pool.service';
import { Pool } from './schemas';

@Controller('pool')
export class PoolController {
  constructor(private readonly poolService: PoolService) { }

  @Post()
  async create(
    @Body(ValidationPipe) createPoolDto: CreatePoolDto,
  ): Promise<Pool> {
    return this.poolService.create(createPoolDto);
  }

  @Get('/:poolId/winner')
  async getWinner(@Param('poolId') poolId: string): Promise<any> {
    return this.poolService.getWinner(poolId);
  }
}
