import { Body, Controller, Get, Param, Post, UseFilters } from '@nestjs/common';
import { ServiceEntrepreneurService } from './service_entrepreneur.service';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';
import { CreateServiceEnpretenuerDTO } from './dtos/create-service_entrepreneur.dto';

@Controller('/api/v1/service')
export class ServiceEntrepreneurController {
  constructor(
    private readonly serviceServiceEntrepreneur: ServiceEntrepreneurService,
  ) {}

  @Post()
  @UseFilters(new HttpExceptionFilter())
  async create(@Body() body: CreateServiceEnpretenuerDTO) {
    return await this.serviceServiceEntrepreneur.create(body);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.serviceServiceEntrepreneur.findOne(id);
  }

  @Get()
  async find() {
    return await this.serviceServiceEntrepreneur.find();
  }

  @Get('category/:id')
  async findCategory(@Param('id') id: string) {
    return await this.serviceServiceEntrepreneur.findCategory(id);
  }
}
