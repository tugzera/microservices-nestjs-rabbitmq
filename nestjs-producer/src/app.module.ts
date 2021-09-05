import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { PoolModule } from './pool/pool.module';
import { RabbitmqModule } from './rabbitmq/rabbitmq.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING),
    PoolModule,
    RabbitmqModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
