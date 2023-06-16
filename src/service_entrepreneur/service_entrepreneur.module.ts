import { Module } from '@nestjs/common';
import { ServiceEntrepreneurService } from './service_entrepreneur.service';

@Module({
  providers: [ServiceEntrepreneurService]
})
export class ServiceEntrepreneurModule {}
