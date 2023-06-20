import { Injectable } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import { ClientEntity } from 'src/client/client.entity';
import { ClientService } from 'src/client/client.service';
import { JwtService } from '@nestjs/jwt';
import { EntrepreneurService } from 'src/entrepreneur/entrepreneur.service';
import { EntrepreneurEntity } from 'src/entrepreneur/entrepreneur.entity';

@Injectable()
export class LoginService {
  constructor(
    private readonly clientService: ClientService,
    private readonly entrepreneurService: EntrepreneurService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: object, typeUser: string) {
    const payload = {
      sub: user['id'],
      email: user['email'],
      type: typeUser,
    };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  async validateClient(email: string, password: string) {
    let client: ClientEntity;
    try {
      client = await this.clientService.findOneOrFail(email);
    } catch (error) {
      return null;
    }

    const isPasswordValid = compareSync(password, client['password']);

    if (!isPasswordValid) return null;

    return client;
  }

  async validateEntrepreneur(email: string, password: string) {
    let entrepreneur: EntrepreneurEntity;
    try {
      entrepreneur = await this.entrepreneurService.findOneOrFail(email);
    } catch (error) {
      return null;
    }

    const isPasswordValid = compareSync(password, entrepreneur['password']);

    if (!isPasswordValid) return null;

    return entrepreneur;
  }
}
