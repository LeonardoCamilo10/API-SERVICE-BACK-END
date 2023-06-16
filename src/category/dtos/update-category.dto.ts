import { IsNotEmpty, IsString } from 'class-validator';

export class updateCategoryDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
}
