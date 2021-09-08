import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { PoolService } from '../pool/pool.service';
import { RabbitmqService } from '../rabbitmq/rabbitmq.service';
import { CreatePoolVoteDto } from './dtos';
import { PoolVote } from './schemas/pool-vote.schema';

@Injectable()
export class PoolVoteService {
  constructor(
    @InjectModel(PoolVote.name) private poolVoteModel: Model<PoolVote>,
    private poolService: PoolService,
    private rabbitMqService: RabbitmqService,
  ) {}

  async createPoolVote(createPoolVoteDto: CreatePoolVoteDto): Promise<void> {
    const { poolId, poolOptionId } = createPoolVoteDto;
    await this.poolService.findPoolByIdAndValidateOption(poolId, poolOptionId);
    await this.rabbitMqService.send(poolId, JSON.stringify(createPoolVoteDto));
    // const createdPoolVote = new this.poolVoteModel(createPoolVoteDto);
    // return createdPoolVote.save();
  }
}
