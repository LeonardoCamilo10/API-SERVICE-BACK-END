import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { PassportModule } from '@nestjs/passport';
import { ClientModule } from 'src/client/client.module';
import { EntrepreneurModule } from 'src/entrepreneur/entrepreneur.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { LoginController } from './login.controller';
import {
  LocalClientStrategy,
  LocalEntrepreneurStrategy,
} from './strategies/local.strategy';
import {
  JwtClientStrategy,
  JwtEntrepreneurStrategy,
  JwtStrategy,
} from './strategies/jwt.strategy';
// import {JwtStra} from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PassportModule,
    ClientModule,
    EntrepreneurModule,
    JwtModule.register({
      privateKey: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  exports: [LoginService],
  providers: [
    LoginService,
    LocalClientStrategy,
    LocalEntrepreneurStrategy,
    JwtClientStrategy,
    JwtEntrepreneurStrategy,
    JwtStrategy,
  ],
  controllers: [LoginController],
})
export class LoginModule {}
