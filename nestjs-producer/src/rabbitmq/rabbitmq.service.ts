import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class RabbitmqService {
  constructor(@Inject('POOL_PUBLISHER') private client: ClientProxy) {}

  async send(pattern: string, data: unknown) {
    return this.client.emit(pattern, data);
  }
}
