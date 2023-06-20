import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { createClientDTO } from './dtos/create-client.dto';
import { ClientService } from './client.service';
import { updateClientDTO } from './dtos/update-client.dto';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';
import { AuthGuard } from '@nestjs/passport';

@Controller('/api/v1/client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post('signup')
  @UseFilters(new HttpExceptionFilter())
  async create(@Body() body: createClientDTO) {
    return await this.clientService.create(body);
  }

  @UseGuards(AuthGuard('jwt-client'))
  @UseFilters(new HttpExceptionFilter())
  @Get('profile/:id')
  async find(@Param('id') id: string) {
    return await this.clientService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt-client'))
  @Put('update/:id')
  @UseFilters(new HttpExceptionFilter())
  async update(@Body() body: updateClientDTO, @Param('id') id: string) {
    return await this.clientService.update(body, id);
  }
}
