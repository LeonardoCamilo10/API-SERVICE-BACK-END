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
import { ServiceEntrepreneurService } from './service_entrepreneur.service';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';
import { CreateServiceEnpretenuerDTO } from './dtos/create-service_entrepreneur.dto';
import { UpdateServiceEnpretenuerDTO } from './dtos/update-service_entrepreneur.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('/api/v1/service')
export class ServiceEntrepreneurController {
  constructor(
    private readonly serviceServiceEntrepreneur: ServiceEntrepreneurService,
  ) {}

  @UseFilters(new HttpExceptionFilter())
  @UseGuards(AuthGuard('jwt-entrepreneur'))
  @Post()
  async create(@Body() body: CreateServiceEnpretenuerDTO) {
    return await this.serviceServiceEntrepreneur.create(body);
  }

  @Get(':id')
  @UseFilters(new HttpExceptionFilter())
  async findOne(@Param('id') id: string) {
    return await this.serviceServiceEntrepreneur.findOne(id);
  }

  @Get()
  @UseFilters(new HttpExceptionFilter())
  async find() {
    return await this.serviceServiceEntrepreneur.find();
  }

  @Get('category/:id')
  @UseFilters(new HttpExceptionFilter())
  async findCategory(@Param('id') id: string) {
    return await this.serviceServiceEntrepreneur.findCategory(id);
  }

  @UseGuards(AuthGuard('jwt-entrepreneur'))
  @Get('entrepreneur/:id')
  @UseFilters(new HttpExceptionFilter())
  async findEntrepreneur(@Param('id') id: string) {
    return await this.serviceServiceEntrepreneur.findEntrepreneur(id);
  }

  @UseGuards(AuthGuard('jwt-entrepreneur'))
  @Put(':id')
  @UseFilters(new HttpExceptionFilter())
  async update(
    @Param('id') id: string,
    @Body() body: UpdateServiceEnpretenuerDTO,
  ) {
    return await this.serviceServiceEntrepreneur.update(id, body);
  }
}
