import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
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
    const existCnpj = await this.repo.find({ where: { cnpj } });
    if (existCnpj.length !== 0)
      throw new BadRequestException('the cnpj already exists');

    body['password'] = await hashPassword(body['password']);

    const entrepreneur = this.repo.create(body);
    await this.repo.save(entrepreneur);

    entrepreneur['password'] = undefined;
    return entrepreneur;
  }

  async findOne(id: string) {
    if (!id) throw new BadRequestException('Id is obrigatory');
    const entrepreneur = await this.repo.findOne({ where: { id } });
    if (!entrepreneur) throw new NotFoundException('Not Found User');

    return entrepreneur;
  }

  async update(body: object, id: string) {
    const findEntrepreneur = await this.findOne(id);

    if (body['cnpj']) {
      const cnpj = body['cnpj'];
      const existCnpj = await this.repo.find({ where: { cnpj } });

      if (existCnpj.length !== 0 && existCnpj[0].id !== id)
        throw new BadRequestException('the cnpj already exists');
    }

    const client = Object.assign(findEntrepreneur, body);

    return this.repo.save(client);
  }

  async findOneOrFail(email: string) {
    const entrepreneur = await this.repo.findOne({ where: { email } });

    if (!entrepreneur) throw new UnauthorizedException('Email is incorrect!');

    return entrepreneur;
  }
}
