import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientEntity } from './client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientEntity) private repo: Repository<ClientEntity>,
  ) {
    this.repo = repo;
  }

  async create(body: object) {
    const email = body['email'];
    const validEmail = await this.repo.find({ where: { email } });
    if (validEmail.length !== 0) return 'Exist email';

    const cpf = body['cpf'];
    const validCpf = await this.repo.find({ where: { cpf } });
    if (validCpf.length !== 0) return 'Exist cpf';

    const client = this.repo.create(body);
    return await this.repo.save(client);
  }

  async find(id: string) {
    const client = await this.repo.find({ where: { id } });
    if (client.length === 0) return 'Not found';

    return client;
  }
}
