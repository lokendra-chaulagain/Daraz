import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { User, UserDocument } from '../user/user.schema';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async signUp(createUserDto: CreateUserDto): Promise<UserDocument> {
    // Check if user exists
    const userExists = await this.userModel.findOne({
      username: createUserDto.username,
    });
    if (userExists) {
      throw new HttpException('User Already Exists', HttpStatus.CONFLICT);
    }

    // Hash the password
    const hashedPassword = await this.hashData(createUserDto.password);
    const newUser = await new this.userModel({
      ...createUserDto,
      password: hashedPassword,
    }).save();
    return newUser;
  }

  async hashData(data: string) {
    return argon2.hash(data);
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: string) {
    return `This action returns a #${id} auth`;
  }

  update(id: string, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: string) {
    return `This action removes a #${id} auth`;
  }
}
