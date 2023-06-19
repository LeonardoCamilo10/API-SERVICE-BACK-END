import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'communication' })
export class CommunicationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  observation: string;

  @Column()
  clientId: string;

  @Column()
  serviceId: string;
}
