import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { config } from 'dotenv';

import { RabbitmqService } from './rabbitmq.service';

config();

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'POOL_PUBLISHER',
        transport: Transport.RMQ,
        options: {
          urls: [
            `amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_HOST}`,
          ],
          queue: 'test-pool',
        },
      },
    ]),
  ],
  providers: [RabbitmqService],
  exports: [RabbitmqService],
})
export class RabbitmqModule {}
