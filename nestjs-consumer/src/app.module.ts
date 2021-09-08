import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { PoolVoteModule } from './pool-vote/pool-vote.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING, {
      dbName: process.env.MONGODB_DATABASE,
    }),
    PoolVoteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
