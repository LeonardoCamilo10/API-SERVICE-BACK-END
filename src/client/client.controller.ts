import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { createClientDTO } from './dtos/create-client.dto';
import { ClientService } from './client.service';
import { updateClientDTO } from './dtos/update-client.dto';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';

@Controller('/api/v1/client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @UseFilters(new HttpExceptionFilter())
  @Post('signup')
  async create(@Body() body: createClientDTO) {
    return await this.clientService.create(body);
  }

  @Get('profile/:id')
  async find(@Param('id') id: string) {
    return await this.clientService.findOne(id);
  }

  @Put('update/:id')
  async update(@Body() body: updateClientDTO, @Param('id') id: string) {
    return await this.clientService.update(body, id);
  }
}
