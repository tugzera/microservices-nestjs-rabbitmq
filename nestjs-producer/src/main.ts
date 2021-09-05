import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  await app.listen(process.env.PORT);
}

// async function rabbitmq() {
//   const app = await NestFactory.createMicroservice<MicroserviceOptions>(
//     AppModule,
//     {
//       transport: Transport.RMQ,
//       options: {
//         urls: [
//           `amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_HOST}`,
//         ],
//         queue: process.env.RABBITMQ_QUEUE,
//         // false = manual acknowledgement; true = automatic acknowledgment
//         noAck: false,
//         // Get one by one
//         prefetchCount: 1,
//       },
//     },
//   );
//   await app.listen();
//   Logger.log(`RabbitMq Listening...`);
// }

bootstrap();
// rabbitmq();
