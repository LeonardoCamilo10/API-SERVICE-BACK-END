import { Body, Controller, Get, Post } from '@nestjs/common';
import { createClientDTO } from './dtos/create-client.dto';
import { ClientService } from './client.service';

@Controller('/api/v1/client')
export class ClientController {
  constructor(private readonly serviceClient: ClientService) {}

  @Post('signup')
  async create(@Body() body: createClientDTO) {
    return await this.serviceClient.create(body);
  }
}
