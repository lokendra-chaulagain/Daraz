import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSizeDto } from './dto/create-size.dto';
import { Size, SizeDocument } from './size.schema';

@Injectable()
export class SizeService {
  constructor(@InjectModel(Size.name) private sizeModel: Model<SizeDocument>) {}

  async create(createSizeDto: CreateSizeDto) {
    try {
      const result = new this.sizeModel(createSizeDto);
      return await result.save();
    } catch (error) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    try {
      const results = await this.sizeModel.find();
      return results;
    } catch (error) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: string) {
    try {
      const result = await this.sizeModel.findById(id);
      return result;
    } catch (error) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: string) {
    try {
      const result = await this.sizeModel.findByIdAndDelete(id);
      return result;
    } catch (error) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
