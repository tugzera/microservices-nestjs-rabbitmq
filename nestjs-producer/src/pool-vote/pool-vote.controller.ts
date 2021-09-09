import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';

import { CreatePoolVoteDto } from './dtos';
import { PoolVoteService } from './pool-vote.service';

@Controller('pool-vote')
export class PoolVoteController {
  constructor(private readonly poolVoteService: PoolVoteService) {}

  @Post()
  async create(
    @Body(ValidationPipe) createPoolVoteDto: CreatePoolVoteDto,
  ): Promise<void> {
    return this.poolVoteService.createPoolVote(createPoolVoteDto);
  }

  @Get('/populate')
  async populate(): Promise<void> {
    return this.poolVoteService.populatePoolVote();
  }
}
