import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientController } from './client/client.controller';
import { ClientModule } from './client/client.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntrepreneurController } from './entrepreneur/entrepreneur.controller';
import { EntrepreneurModule } from './entrepreneur/entrepreneur.module';
import { CategoryController } from './category/category.controller';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      synchronize: true,
      autoLoadEntities: true,
    }),
    ClientModule,
    EntrepreneurModule,
    CategoryModule,
  ],
  controllers: [AppController, ClientController, EntrepreneurController, CategoryController],
  providers: [AppService],
})
export class AppModule {}
