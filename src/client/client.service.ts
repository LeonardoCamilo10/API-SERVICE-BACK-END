import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientEntity } from './client.entity';
import { Repository } from 'typeorm';
import { hashPassword } from 'src/util/func-password.util';

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

    body['password'] = await hashPassword(body['password']);

    const client = this.repo.create(body);
    await this.repo.save(client);

    client['password'] = undefined;
    return client;
  }

  async findOne(id: string) {
    const client = await this.repo.findOne({ where: { id } });
    if (!client) return 'Not found';

    return client;
  }

  async update(body: object, id: string) {
    const findClient = await this.findOne(id);

    if (body['cpf']) {
      const cpf = body['cpf'];
      const validCpf = await this.repo.find({ where: { cpf } });
      if (validCpf.length !== 0 && findClient['id'] !== validCpf['id'])
        return 'Exist cpf';
    }

    const client = Object.assign(findClient, body);

    return this.repo.save(client);
  }
}
