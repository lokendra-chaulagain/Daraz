import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BannerDocument = Banner & Document;

@Schema()
export class Banner {
  @Prop({ required: true })
  image: string;

  @Prop({ default: false })
  isActive: boolean;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const BannerSchema = SchemaFactory.createForClass(Banner);
