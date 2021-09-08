import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';

import { CreatePoolVoteDto } from './dtos';
import { PoolVoteService } from './pool-vote.service';

@Controller('pool-vote')
export class PoolVoteController {
  constructor(private readonly poolVoteService: PoolVoteService) {}

  @MessagePattern('pool-vote')
  public async execute(@Payload() data: string, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();
    const parsedData = JSON.parse(data) as CreatePoolVoteDto;
    console.log(parsedData);
    await this.poolVoteService.createPoolVote(parsedData);
    channel.ack(originalMessage);
  }
}
