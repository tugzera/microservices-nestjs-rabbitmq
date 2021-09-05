import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { RabbitmqService } from '../rabbitmq/rabbitmq.service';
import { CreatePoolDto } from './dtos';
import { Pool } from './schemas';

@Injectable()
export class PoolService {
  constructor(
    @InjectModel(Pool.name) private poolModel: Model<Pool>,
    private rabbitMQService: RabbitmqService,
  ) {}

  async create(createPoolDto: CreatePoolDto): Promise<void> {
    const createdPool = new this.poolModel(createPoolDto);
    this.rabbitMQService.send('test', createdPool);
    return null;
    // return createdPool.save();
  }
}
