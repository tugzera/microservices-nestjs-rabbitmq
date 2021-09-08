import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreatePoolDto } from './dtos';
import { Pool } from './schemas';

@Injectable()
export class PoolService {
  constructor(@InjectModel(Pool.name) private poolModel: Model<Pool>) {}

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
}
