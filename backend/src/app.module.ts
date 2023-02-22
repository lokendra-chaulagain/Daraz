import { CategoryModule } from './modules/category/category.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { BannerModule } from './modules/banner/banner.module';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://lokendra:lokendra55@cluster0.t1stglm.mongodb.net/daraz_db?retryWrites=true&w=majority',
    ),
    CategoryModule,
    BannerModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
