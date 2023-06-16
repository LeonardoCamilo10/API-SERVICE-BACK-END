import { IsNumber, IsOptional, MaxLength } from 'class-validator';

export class UpdateServiceEnpretenuerDTO {
  @MaxLength(40)
  @IsOptional()
  name: string;

  @IsOptional()
  @MaxLength(255)
  description: string;

  @IsOptional()
  @IsNumber()
  price: number;

  @IsOptional()
  categoryId: string;

  @IsOptional()
  entrepreneur: string;

  @IsOptional()
  active: boolean;
}
