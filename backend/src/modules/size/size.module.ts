import { Module } from '@nestjs/common';
import { SizeService } from './size.service';
import { SizeController } from './size.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Size, SizeSchema } from './size.schema';

@Module({
  controllers: [SizeController],
  providers: [SizeService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Size.name,
        schema: SizeSchema,
      },
    ]),
  ],
})
export class SizeModule {}
