import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';
import { CategoryDTO } from './dtos/category.dto';

@Controller('/api/v1/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @UseFilters(new HttpExceptionFilter())
  async create(@Body() body: CategoryDTO) {
    return await this.categoryService.create(body);
  }

  @Get(':id')
  @UseFilters(new HttpExceptionFilter())
  async findOne(@Param('id') id: string) {
    return await this.categoryService.findOne(id);
  }

  @Get()
  @UseFilters(new HttpExceptionFilter())
  async find() {
    return await this.categoryService.find();
  }

  @Put(':id')
  @UseFilters(new HttpExceptionFilter())
  async update(@Param('id') id: string, @Body() body: CategoryDTO) {
    return await this.categoryService.update(id, body);
  }
}
