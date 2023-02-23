import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SearchTagDocument = SearchTag & Document;

@Schema({ timestamps: true })
export class SearchTag {
  @Prop({ required: true })
  name: string;
}

export const SearchTagSchema = SchemaFactory.createForClass(SearchTag);
