import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';

async function rabbitmq() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [
          `amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_HOST}`,
        ],
        queue: process.env.RABBITMQ_QUEUE,
        // false = manual acknowledgement; true = automatic acknowledgment
        noAck: false,
        // Get one by one
        prefetchCount: 1,
      },
    },
  );
  await app.listen();
  Logger.log(`RabbitMq Listening...`);
}

rabbitmq();
