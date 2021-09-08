import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';

import { CreatePoolVoteDto } from './dtos';
import { PoolVoteService } from './pool-vote.service';
import { PoolVote } from './schemas/pool-vote.schema';

@Controller('pool-vote')
export class PoolVoteController {
  constructor(private readonly poolVoteService: PoolVoteService) {}

  @Post()
  async create(
    @Body(ValidationPipe) createPoolVoteDto: CreatePoolVoteDto,
  ): Promise<PoolVote> {
    return this.poolVoteService.createPoolVote(createPoolVoteDto);
  }
}
