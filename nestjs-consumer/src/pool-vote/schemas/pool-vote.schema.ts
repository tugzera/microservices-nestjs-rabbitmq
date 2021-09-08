import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { Document } from 'mongoose';

@Schema()
export class PoolVote extends Document {
  @Prop(String)
  email: string;

  @Prop(ObjectId)
  poolId: string;

  @Prop(ObjectId)
  poolOptionId: string;
}

export const PoolVoteSchema = SchemaFactory.createForClass(PoolVote);
