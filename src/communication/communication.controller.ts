import {
  Body,
  Controller,
  Post,
  Get,
  UseFilters,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
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

  @Get(':id')
  @UseFilters(new HttpExceptionFilter())
  async findOne(@Param('id') id: string) {
    return await this.serviceCommunication.findOne(id);
  }

  @Delete(':id')
  @HttpCode(403)
  @UseFilters(new HttpExceptionFilter())
  async delete(@Param('id') id: string) {
    await this.serviceCommunication.delete(id);
  }
}
