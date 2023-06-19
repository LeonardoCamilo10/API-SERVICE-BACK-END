import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCommunicationDTO {
  @IsString()
  @IsNotEmpty()
  observation: string;

  @IsNotEmpty()
  clientId: string;

  @IsNotEmpty()
  serviceId: string;
}
