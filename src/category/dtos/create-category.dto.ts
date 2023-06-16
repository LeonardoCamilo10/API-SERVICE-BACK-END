import { IsNotEmpty, IsString } from 'class-validator';

export class createCategoryDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
}
