import { IsNotEmpty, IsNumber, MaxLength } from 'class-validator';

export class CreateServiceEnpretenuerDTO {
  @MaxLength(40)
  @IsNotEmpty()
  name: string;

  @MaxLength(255)
  description: string;

  @IsNumber()
  price: number;

  @IsNotEmpty()
  categoryId: string;

  @IsNotEmpty()
  entrepreneur: string;

  @IsNotEmpty()
  active: boolean;
}
