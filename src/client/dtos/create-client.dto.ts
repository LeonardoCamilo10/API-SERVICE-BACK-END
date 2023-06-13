import {
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsEmpty,
  IsString,
} from 'class-validator';
import { UserInterface } from '../../interfaces/user.interface';
import { IsEqualPassword } from '../decorators/IsEqualPassword.decorator';

export class createClientDTO implements UserInterface {
  @IsString()
  @IsNotEmpty()
  name: string;

  @MinLength(11)
  @IsNotEmpty()
  cpf: string;

  @MinLength(8)
  @IsEmpty()
  phone: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @MinLength(8)
  @IsNotEmpty()
  password: string;

  @IsEqualPassword('password', {
    message: 'password and confirmPassword no equal',
  })
  @IsNotEmpty()
  confirmPassword: string;
}
