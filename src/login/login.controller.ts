import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoginService } from './login.service';
import { USERS } from './enums/user.enum';

@Controller('api/v1/auth')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @UseGuards(AuthGuard('local-client'))
  @Post('client/login')
  async loginClient(@Req() req: any) {
    return this.loginService.login(req.user, USERS.client);
  }

  @UseGuards(AuthGuard('local-entrepreneur'))
  @Post('entrepreneur/login')
  async loginEntrepreneur(@Req() req: any) {
    return this.loginService.login(req.user, USERS.entrepreneur);
  }
}
