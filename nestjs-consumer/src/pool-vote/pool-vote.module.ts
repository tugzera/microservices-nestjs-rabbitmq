import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PoolVoteController } from './pool-vote.controller';
import { PoolVoteService } from './pool-vote.service';
import { PoolVote, PoolVoteSchema } from './schemas/pool-vote.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: PoolVote.name,
        schema: PoolVoteSchema,
      },
    ]),
  ],
  controllers: [PoolVoteController],
  providers: [PoolVoteService],
  exports: [PoolVoteService],
})
export class PoolVoteModule {}
