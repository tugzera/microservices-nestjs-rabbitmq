import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreatePoolVoteDto } from './dtos';
import { PoolVote } from './schemas/pool-vote.schema';

@Injectable()
export class PoolVoteService {
  constructor(
    @InjectModel(PoolVote.name) private poolVoteModel: Model<PoolVote>,
  ) {}

  async createPoolVote(
    createPoolVoteDto: CreatePoolVoteDto,
  ): Promise<PoolVote> {
    const createdPoolVote = new this.poolVoteModel(createPoolVoteDto);
    return createdPoolVote.save();
  }
}
