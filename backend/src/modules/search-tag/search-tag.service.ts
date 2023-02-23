import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSearchTagDto } from './dto/create-search-tag.dto';
import { UpdateSearchTagDto } from './dto/update-search-tag.dto';
import { SearchTag, SearchTagDocument } from './search-tag.schema';

@Injectable()
export class SearchTagService {
  constructor(
    @InjectModel(SearchTag.name) private tagModel: Model<SearchTagDocument>,
  ) {}

  async create(createSearchTagDto: CreateSearchTagDto) {
    try {
      const newTag = new this.tagModel(createSearchTagDto);
      return await newTag.save();
    } catch (error) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    try {
      const tags = await this.tagModel.find();
      return tags;
    } catch (error) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: string) {
    try {
      const tag = await this.tagModel.findById(id);
      return tag;
    } catch (error) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: string, updateSearchTagDto: UpdateSearchTagDto) {
    try {
      const updatedTag = await this.tagModel.findByIdAndUpdate(
        id,
        updateSearchTagDto,
        { new: true },
      );
      return updatedTag;
    } catch (error) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: string) {
    try {
      const deletedTag = await this.tagModel.findByIdAndDelete(id);
      return deletedTag;
    } catch (error) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
