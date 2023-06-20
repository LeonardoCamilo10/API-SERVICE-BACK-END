import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { LoginService } from '../login.service';

@Injectable()
export class LocalClientStrategy extends PassportStrategy(
  Strategy,
  'local-client',
) {
  constructor(private readonly loginService: LoginService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string) {
    const user = await this.loginService.validateClient(email, password);

    if (!user)
      throw new UnauthorizedException('Email or password is incorrect!');

    return user;
  }
}

@Injectable()
export class LocalEntrepreneurStrategy extends PassportStrategy(
  Strategy,
  'local-entrepreneur',
) {
  constructor(private readonly loginService: LoginService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string) {
    const user = await this.loginService.validateEntrepreneur(email, password);

    if (!user)
      throw new UnauthorizedException('Email or password is incorrect!');

    return user;
  }
}
