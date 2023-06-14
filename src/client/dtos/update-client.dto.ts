import { MinLength, IsOptional, IsString } from 'class-validator';

export class updateClientDTO {
  @IsString()
  @IsOptional()
  name: string;

  @MinLength(11)
  @IsOptional()
  cpf: string;

  @MinLength(8)
  @IsOptional()
  phone: string;
}
