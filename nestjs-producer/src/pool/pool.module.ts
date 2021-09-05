import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RabbitmqModule } from '../rabbitmq/rabbitmq.module';
import { PoolController } from './pool.controller';
import { PoolService } from './pool.service';
import { Pool, PoolSchema } from './schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Pool.name,
        schema: PoolSchema,
      },
    ]),
    RabbitmqModule,
  ],
  controllers: [PoolController],
  providers: [PoolService],
})
export class PoolModule {}
