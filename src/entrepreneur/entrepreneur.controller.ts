import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { EntrepreneurService } from './entrepreneur.service';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';
import { createEntrepreneurDTO } from './dtos/create-entrepreneur.dto';
import { updateEntrepreneurDTO } from './dtos/update-entrepreneur.dto';

@Controller('/api/v1/entrepreneur')
export class EntrepreneurController {
  constructor(private readonly entrepreneurService: EntrepreneurService) {}

  @Post('signup')
  @UseFilters(new HttpExceptionFilter())
  async create(@Body() body: createEntrepreneurDTO) {
    return await this.entrepreneurService.create(body);
  }

  @Get('profile/:id')
  async find(@Param('id') id: string) {
    return await this.entrepreneurService.findOne(id);
  }

  @Put('update/:id')
  async update(@Body() body: updateEntrepreneurDTO, @Param('id') id: string) {
    return await this.entrepreneurService.update(body, id);
  }
}
