import { MinLength, IsOptional, IsString } from 'class-validator';

export class updateEntrepreneurDTO {
  @IsString()
  @IsOptional()
  name: string;

  @MinLength(14)
  @IsOptional()
  cnpj: string;

  @MinLength(8)
  @IsOptional()
  phone: string;
}
