import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SearchTagService } from './search-tag.service';
import { CreateSearchTagDto } from './dto/create-search-tag.dto';
import { UpdateSearchTagDto } from './dto/update-search-tag.dto';

@Controller('search-tag')
export class SearchTagController {
  constructor(private readonly searchTagService: SearchTagService) {}

  @Post()
  create(@Body() createSearchTagDto: CreateSearchTagDto) {
    return this.searchTagService.create(createSearchTagDto);
  }

  @Get()
  findAll() {
    return this.searchTagService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.searchTagService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSearchTagDto: UpdateSearchTagDto,
  ) {
    return this.searchTagService.update(id, updateSearchTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.searchTagService.remove(id);
  }
}
