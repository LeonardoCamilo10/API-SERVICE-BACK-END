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
import { CategoryDTO, createCategoryDTO } from './dtos/category.dto';
import { updateCategoryDTO } from './dtos/update-category.dto';

@Controller('/api/v1/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @UseFilters(new HttpExceptionFilter())
  async create(@Body() body: CategoryDTO) {
    return await this.categoryService.create(body);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.categoryService.findOne(id);
  }

  @Get()
  async find() {
    return await this.categoryService.find();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: CategoryDTO) {
    return await this.categoryService.update(id, body);
  }
}
