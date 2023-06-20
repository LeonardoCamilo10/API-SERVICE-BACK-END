import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommunicationEntity } from './communication.entity';
import { ClientService } from 'src/client/client.service';
import { ServiceEntrepreneurService } from 'src/service_entrepreneur/service_entrepreneur.service';

@Injectable()
export class CommunicationService {
  constructor(
    @InjectRepository(CommunicationEntity)
    private repo: Repository<CommunicationEntity>,
    private readonly serviceClient: ClientService,
    private readonly serviceServiceEntrepreneur: ServiceEntrepreneurService,
  ) {
    this.repo = repo;
  }

  async create(body: object) {
    const client = await this.serviceClient.findOne(body['clientId']);

    const service = await this.serviceServiceEntrepreneur.findOne(
      body['serviceId'],
    );

    body['clientId'] = client;
    body['serviceId'] = service;

    const communication = this.repo.create(body);
    return await this.repo.save(communication);
  }

  async findOne(id: string) {
    const communication = await this.repo.findOne({ where: { id } });

    if (!communication) throw new NotFoundException('Not found Communication');
    return communication;
  }

  async delete(id: string) {
    const communication = await this.repo.findOne({ where: { id } });

    if (!communication) throw new NotFoundException('Not found Communication');

    await this.repo.remove(communication);
  }
}
