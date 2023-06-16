import { Module } from '@nestjs/common';
import { ServiceEntrepreneurService } from './service_entrepreneur.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceEntrepreneurEntity } from './service_entrepreneur.entity';
import { CategoryModule } from 'src/category/category.module';
import { EntrepreneurModule } from 'src/entrepreneur/entrepreneur.module';
import { ServiceEntrepreneurController } from './service_entrepreneur.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ServiceEntrepreneurEntity]),
    CategoryModule,
    EntrepreneurModule,
  ],
  providers: [ServiceEntrepreneurService],
  exports: [ServiceEntrepreneurService],
  controllers: [ServiceEntrepreneurController],
})
export class ServiceEntrepreneurModule {}
