import { CategoryModule } from './modules/category/category.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { BannerModule } from './modules/banner/banner.module';
import { ProductModule } from './modules/product/product.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { SearchTagModule } from './modules/search-tag/search-tag.module';
import { CommentModule } from './modules/comment/comment.module';
import { ColorModule } from './modules/color/color.module';
import { SizeModule } from './modules/size/size.module';
import { GenreModule } from './modules/genre/genre.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://lokendra:lokendra55@cluster0.t1stglm.mongodb.net/daraz_db?retryWrites=true&w=majority',
    ),
    CategoryModule,
    BannerModule,
    ProductModule,
    UserModule,
    AuthModule,
    SearchTagModule,
    CommentModule,
    ColorModule,
    SizeModule,
    GenreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
