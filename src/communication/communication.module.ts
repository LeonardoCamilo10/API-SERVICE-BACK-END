import { Module } from '@nestjs/common';
import { CommunicationEntity } from './communication.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommunicationService } from './communication.service';

@Module({
  imports: [TypeOrmModule.forFeature([CommunicationEntity])],
  providers: [CommunicationService],
  exports: [CommunicationService],
  controllers: [CommunicationService],
})
export class CommunicationModule {}
