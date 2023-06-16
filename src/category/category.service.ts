import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private repo: Repository<CategoryEntity>,
  ) {
    this.repo = repo;
  }

  async create(body: object) {
    const name: string = body['name'].toUpperCase();
    const findCategory = await this.repo.find({ where: { name } });
    if (findCategory.length !== 0)
      throw new BadRequestException('the category already exists');

    body['name'] = name;
    const category = this.repo.create(body);
    return await this.repo.save(category);
  }

  async findOne(id: string) {
    const category = await this.repo.findOne({ where: { id } });
    if (!category) throw new NotFoundException('Not Found Category');

    return category;
  }
}
