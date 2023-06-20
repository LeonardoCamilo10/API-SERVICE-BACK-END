import { Injectable } from '@nestjs/common/decorators';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ClientService } from 'src/client/client.service';
import { EntrepreneurService } from 'src/entrepreneur/entrepreneur.service';

@Injectable()
export class JwtClientStrategy extends PassportStrategy(
  Strategy,
  'jwt-client',
) {
  constructor(private readonly clientService: ClientService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET_KEY,
    });
  }

  async validate(payload: any) {
    if (payload.type == 'client') {
      const findClient = this.clientService.findOne(payload.sub);
      if (findClient) return { id: payload.sub, email: payload.email };
    }
  }
}

@Injectable()
export class JwtEntrepreneurStrategy extends PassportStrategy(
  Strategy,
  'jwt-entrepreneur',
) {
  constructor(private readonly entrepreneurService: EntrepreneurService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET_KEY,
    });
  }

  async validate(payload: any) {
    if (payload.type == 'entrepreneur') {
      const findEntrepreneur = this.entrepreneurService.findOne(payload.sub);
      if (findEntrepreneur) return { id: payload.sub, email: payload.email };
    }
  }
}
