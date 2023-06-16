import { Controller, Post, UseFilters } from '@nestjs/common';
import { CategoryService } from './category.service';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';

@Controller('/api/v1/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  // @Post()
  // @UseFilters(new HttpExceptionFilter())
  // async create(@Body() body: createEntrepreneurDTO) {
  //   return await this.entrepreneurService.create(body);
  // }
}
