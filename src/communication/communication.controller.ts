import {
  Body,
  Controller,
  Post,
  Get,
  UseFilters,
  Param,
  Delete,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { CommunicationService } from './communication.service';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';
import { CreateCommunicationDTO } from './dtos/create-communication.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/v1/communication')
export class CommunicationController {
  constructor(private readonly serviceCommunication: CommunicationService) {}

  @UseFilters(new HttpExceptionFilter())
  @UseGuards(AuthGuard('jwt-client'))
  @Post()
  async create(@Body() body: CreateCommunicationDTO) {
    return this.serviceCommunication.create(body);
  }

  @UseFilters(new HttpExceptionFilter())
  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.serviceCommunication.findOne(id);
  }

  @UseFilters(new HttpExceptionFilter())
  @UseGuards(AuthGuard('jwt-entrepreneur'))
  @Get('/entrepreneur/:id')
  async findEntrepreneur(@Param('id') id: string) {
    return await this.serviceCommunication.findEntrepreneur(id);
  }

  @UseFilters(new HttpExceptionFilter())
  @UseGuards(AuthGuard('jwt-client'))
  @Get('client/:id')
  async findClient(@Param('id') id: string) {
    return await this.serviceCommunication.findClient(id);
  }

  @UseFilters(new HttpExceptionFilter())
  @UseGuards(AuthGuard('jwt-client'))
  @HttpCode(403)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.serviceCommunication.delete(id);
  }
}
