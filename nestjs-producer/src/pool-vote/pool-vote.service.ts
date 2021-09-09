import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as faker from 'faker';
import { Model } from 'mongoose';

import { PoolService } from '../pool/pool.service';
import { RabbitmqService } from '../rabbitmq/rabbitmq.service';
import { CreatePoolVoteDto } from './dtos';
import { PoolVote } from './schemas/pool-vote.schema';

@Injectable()
export class PoolVoteService {
  constructor(
    @InjectModel(PoolVote.name) private poolVoteModel: Model<PoolVote>,
    @Inject(forwardRef(() => PoolService))
    private poolService: PoolService,
    private rabbitMqService: RabbitmqService,
  ) {}

  async createPoolVote(createPoolVoteDto: CreatePoolVoteDto): Promise<void> {
    const { poolId, poolOptionId } = createPoolVoteDto;
    await this.poolService.findPoolByIdAndValidateOption(poolId, poolOptionId);
    await this.rabbitMqService.send(
      'pool-vote',
      JSON.stringify(createPoolVoteDto),
    );
  }

  async populatePoolVote(): Promise<void> {
    await Promise.all(
      Array.from({ length: 100 }, () => {
        const newPoolVote = new CreatePoolVoteDto();
        newPoolVote.email = faker.internet.email();
        newPoolVote.poolId = faker.random.objectElement([
          '6139f8198a34eef3c1a76855',
        ]);
        newPoolVote.poolOptionId = faker.random.objectElement([
          '6139f8198a34eef3c1a76856',
          '6139f8198a34eef3c1a76857',
          '6139f8198a34eef3c1a76858',
        ]);
        return this.rabbitMqService.send(
          'pool-vote',
          JSON.stringify(newPoolVote),
        );
      }),
    );
  }

  async mostVoted(): Promise<any[]> {
    return this.poolVoteModel.aggregate([
      { $group: { _id: '$poolOptionId', count: { $sum: 1 } } },
    ]);
  }
}
