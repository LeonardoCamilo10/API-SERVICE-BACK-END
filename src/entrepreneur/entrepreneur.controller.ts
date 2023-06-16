import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { EntrepreneurService } from './entrepreneur.service';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';
import { createEntrepreneurDTO } from './dtos/create-entrepreneur.dto';

@Controller('/api/v1/entrepreneur')
export class EntrepreneurController {
  constructor(private readonly entrepreneurService: EntrepreneurService) {}

  @Post('signup')
  @UseFilters(new HttpExceptionFilter())
  async create(@Body() body: createEntrepreneurDTO) {
    return await this.entrepreneurService.create(body);
  }
}
