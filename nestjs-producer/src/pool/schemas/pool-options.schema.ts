import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class PoolOption extends Document {
  @Prop()
  name: string;
}

export const PoolOptionSchema = SchemaFactory.createForClass(PoolOption);
