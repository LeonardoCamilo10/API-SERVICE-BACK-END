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
import { EntrepreneurService } from './entrepreneur.service';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';
import { createEntrepreneurDTO } from './dtos/create-entrepreneur.dto';
import { updateEntrepreneurDTO } from './dtos/update-entrepreneur.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('/api/v1/entrepreneur')
export class EntrepreneurController {
  constructor(private readonly entrepreneurService: EntrepreneurService) {}

  @Post('signup')
  @UseFilters(new HttpExceptionFilter())
  async create(@Body() body: createEntrepreneurDTO) {
    return await this.entrepreneurService.create(body);
  }

  @UseGuards(AuthGuard('jwt-entrepreneur'))
  @Get('profile/:id')
  @UseFilters(new HttpExceptionFilter())
  async find(@Param('id') id: string) {
    return await this.entrepreneurService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt-entrepreneur'))
  @Put('update/:id')
  @UseFilters(new HttpExceptionFilter())
  async update(@Body() body: updateEntrepreneurDTO, @Param('id') id: string) {
    return await this.entrepreneurService.update(body, id);
  }
}
