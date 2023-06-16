import { Module } from '@nestjs/common';
import { EntrepreneurService } from './entrepreneur.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntrepreneurEntity } from './entrepreneur.entity';
import { EntrepreneurController } from './entrepreneur.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EntrepreneurEntity])],
  providers: [EntrepreneurService],
  exports: [EntrepreneurService],
  controllers: [EntrepreneurController],
})
export class EntrepreneurModule {}
