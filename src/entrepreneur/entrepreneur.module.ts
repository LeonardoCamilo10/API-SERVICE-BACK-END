import { Module } from '@nestjs/common';
import { EntrepreneurService } from './entrepreneur.service';

@Module({
  providers: [EntrepreneurService]
})
export class EntrepreneurModule {}
