import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { CategoryService } from './category.service';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';
import { createCategoryDTO } from './dtos/create-category.dto';

@Controller('/api/v1/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @UseFilters(new HttpExceptionFilter())
  async create(@Body() body: createCategoryDTO) {
    return await this.categoryService.create(body);
  }
}
