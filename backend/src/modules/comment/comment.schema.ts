import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CommentDocument = Comment & Document;

@Schema({ timestamps: true })
export class Comment {
  @Prop()
  name: string;

  @Prop()
  description: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
