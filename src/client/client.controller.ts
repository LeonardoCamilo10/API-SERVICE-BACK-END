import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createClientDTO } from './dtos/create-client.dto';
import { ClientService } from './client.service';

@Controller('/api/v1/client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post('signup')
  async create(@Body() body: createClientDTO) {
    return await this.clientService.create(body);
  }

  @Get('profile/:id')
  async find(@Param('id') id: string) {
    return await this.clientService.find(id);
  }
}
