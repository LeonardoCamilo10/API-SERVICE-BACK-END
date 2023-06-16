import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntrepreneurEntity } from './entrepreneur.entity';
import { Repository } from 'typeorm';
import { hashPassword } from 'src/util/func-password.util';

@Injectable()
export class EntrepreneurService {
  constructor(
    @InjectRepository(EntrepreneurEntity)
    private repo: Repository<EntrepreneurEntity>,
  ) {
    this.repo = repo;
  }

  async create(body: object) {
    const email = body['email'];
    const validEmail = await this.repo.find({ where: { email } });
    if (validEmail.length !== 0)
      throw new BadRequestException('the email already exists');

    const cnpj = body['cnpj'];
    const validCnpj = await this.repo.find({ where: { cnpj } });
    if (validCnpj.length !== 0)
      throw new BadRequestException('the cnpj already exists');

    body['password'] = await hashPassword(body['password']);

    const entrepreneur = this.repo.create(body);
    await this.repo.save(entrepreneur);

    entrepreneur['password'] = undefined;
    return entrepreneur;
  }

  async findOne(id: string) {
    const entrepreneur = await this.repo.findOne({ where: { id } });
    if (!entrepreneur) throw new NotFoundException('Not Found User');

    return entrepreneur;
  }
}
