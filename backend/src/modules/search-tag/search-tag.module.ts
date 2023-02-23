import { Module } from '@nestjs/common';
import { SearchTagService } from './search-tag.service';
import { SearchTagController } from './search-tag.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SearchTag, SearchTagSchema } from './search-tag.schema';

@Module({
  controllers: [SearchTagController],
  providers: [SearchTagService],
  imports: [
    MongooseModule.forFeature([
      {
        name: SearchTag.name,
        schema: SearchTagSchema,
      },
    ]),
  ],
})
export class SearchTagModule {}
