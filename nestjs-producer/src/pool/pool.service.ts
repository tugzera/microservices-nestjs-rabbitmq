import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { PoolVoteService } from '../pool-vote/pool-vote.service';
import { CreatePoolDto } from './dtos';
import { Pool } from './schemas';

@Injectable()
export class PoolService {
  constructor(
    @InjectModel(Pool.name) private poolModel: Model<Pool>,
    @Inject(forwardRef(() => PoolVoteService))
    private poolVoteService: PoolVoteService,
  ) {}

  async create(createPoolDto: CreatePoolDto): Promise<Pool> {
    const createdPool = new this.poolModel(createPoolDto);
    return createdPool.save();
  }

  async findPoolByIdAndValidateOption(
    poolId: string,
    poolOptionId: string,
  ): Promise<Pool> {
    const foundPool = await this.poolModel.find({
      _id: poolId,
      'options._id': poolOptionId,
    });
    if (!foundPool[0]) throw new NotFoundException('Pool was not found.');
    return foundPool[0];
  }

  async getWinner(poolId: string): Promise<any> {
    const result = await this.poolVoteService.mostVoted();
    const pool = await this.poolModel.findById(poolId);
    return pool.options.map((option) => ({
      name: option.name,
      _id: option._id,
      count: result.find((res) => String(res._id) === String(option._id)).count,
    }));
  }
}
