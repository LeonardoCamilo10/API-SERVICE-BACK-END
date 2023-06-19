import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { CommunicationService } from './communication.service';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';
import { CreateCommunicationDTO } from './dtos/create-communication.dto';

@Controller('api/v1/communication')
export class CommunicationController {
  constructor(private readonly serviceCommunication: CommunicationService) {}

  @Post()
  @UseFilters(new HttpExceptionFilter())
  async create(@Body() body: CreateCommunicationDTO) {
    return this.serviceCommunication.create(body);
  }
}
