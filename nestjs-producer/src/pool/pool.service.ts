import { Injectable } from '@nestjs/common';
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
}
