import { Injectable } from '@nestjs/common';
import { ServiceEntrepreneurEntity } from './service_entrepreneur.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryService } from 'src/category/category.service';
import { EntrepreneurService } from 'src/entrepreneur/entrepreneur.service';

@Injectable()
export class ServiceEntrepreneurService {
  constructor(
    @InjectRepository(ServiceEntrepreneurEntity)
    private repo: Repository<ServiceEntrepreneurEntity>,
    private readonly serviceCategory: CategoryService,
    private readonly serviceEntrepreneur: EntrepreneurService,
  ) {
    this.repo = repo;
  }

  async create(body: object) {
    const category = await this.serviceCategory.findOne(body['categoryId']);

    const entrepreneur = await this.serviceEntrepreneur.findOne(
      body['entrepreneurId'],
    );

    body['categoryId'] = category;
    body['entrepreneurId'] = entrepreneur;

    const service = this.repo.create(body);
    return await this.repo.save(service);
  }
}
