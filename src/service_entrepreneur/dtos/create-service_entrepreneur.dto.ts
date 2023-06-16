import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  MaxLength,
} from 'class-validator';
import { Status } from '../enums/status.enum';

export class CreateServiceEnpretenuerDTO {
  @MaxLength(40)
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @MaxLength(255)
  description: string;

  @IsOptional()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  categoryId: string;

  @IsNotEmpty()
  entrepreneurId: string;

  @IsNotEmpty()
  @IsEnum(Status)
  active: boolean;
}
