import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PoolVoteModule } from '../pool-vote/pool-vote.module';
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
    forwardRef(() => PoolVoteModule),
  ],
  controllers: [PoolController],
  providers: [PoolService],
  exports: [PoolService],
})
export class PoolModule {}
