import { Module } from '@nestjs/common';
import { CommunicationEntity } from './communication.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommunicationService } from './communication.service';
import { ClientModule } from 'src/client/client.module';
import { ServiceEntrepreneurModule } from 'src/service_entrepreneur/service_entrepreneur.module';
import { CommunicationController } from './communication.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([CommunicationEntity]),
    ClientModule,
    ServiceEntrepreneurModule,
  ],
  providers: [CommunicationService],
  exports: [CommunicationService],
  controllers: [CommunicationController],
})
export class CommunicationModule {}
