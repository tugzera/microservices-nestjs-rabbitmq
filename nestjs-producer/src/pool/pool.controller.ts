import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';

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

  @Get('/winner')
  async getWinner(): Promise<any> {
    return this.poolService.getWinner('6137e31fea035e7310ad5afd');
  }
}
