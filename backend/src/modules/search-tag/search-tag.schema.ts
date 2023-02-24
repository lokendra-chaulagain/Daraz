import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SearchTagDocument = SearchTag & Document;

@Schema()
export class SearchTag {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true, default: Date.now })
  createdAt: Date;
}

export const SearchTagSchema = SchemaFactory.createForClass(SearchTag);
