import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  async findOne(id: string) {
    if (!id) throw new BadRequestException('Id is obrigatory');
    const service = await this.repo.findOne({ where: { id } });
    if (!service) throw new NotFoundException('Not Found Service');

    return service;
  }

  async findCategory(categoryId: string) {
    if (!categoryId) throw new BadRequestException('categoryId is obrigatory');
    const service = await this.repo.find({
      where: {
        categoryId: {
          id: categoryId,
        },
      },
    });

    if (service.length === 0) throw new NotFoundException('Not Found Service');

    return service;
  }

  async findEntrepreneur(entrepreneurId: string) {
    if (!entrepreneurId)
      throw new BadRequestException('entrepreneurId is obrigatory');
    const service = await this.repo.find({
      where: {
        entrepreneurId: {
          id: entrepreneurId,
        },
      },
    });

    if (service.length === 0) throw new NotFoundException('Not Found Service');

    return service;
  }

  async find() {
    const service = await this.repo.find();
    if (service.length === 0)
      throw new NotFoundException('Not Found Service´s');

    return service;
  }

  async update(id: string, body: object) {
    const findService = await this.repo.findOne({ where: { id } });

    if (body['categoryId']) {
      const category = await this.serviceCategory.findOne(body['categoryId']);

      findService['categoryId'] = category;
    }

    return await this.repo.save(findService);
  }
}
