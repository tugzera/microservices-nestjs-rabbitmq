import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { PoolOption, PoolOptionSchema } from './pool-options.schema';

@Schema()
export class Pool extends Document {
  @Prop(String)
  name: string;

  @Prop(String)
  description: number;

  @Prop({ type: [PoolOptionSchema] })
  options: PoolOption[];
}

export const PoolSchema = SchemaFactory.createForClass(Pool);
