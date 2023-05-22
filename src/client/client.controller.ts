import { Controller, Get } from '@nestjs/common';

@Controller('/api/v1')
export class ClientController {
  @Get('client')
  async getClient() {
    return 'hello';
  }
}
