import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientController } from './client/client.controller';
import { ClientModule } from './client/client.module';

@Module({
  imports: [ClientModule],
  controllers: [AppController, ClientController],
  providers: [AppService],
})
export class AppModule {}
