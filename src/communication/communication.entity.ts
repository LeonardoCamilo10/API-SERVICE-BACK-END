import { ClientEntity } from 'src/client/client.entity';
import { ServiceEntrepreneurEntity } from 'src/service_entrepreneur/service_entrepreneur.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'communication' })
export class CommunicationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  observation: string;

  @ManyToOne(() => ClientEntity, () => CommunicationEntity, {
    eager: true,
  })
  @JoinColumn()
  clientId: ClientEntity;

  @ManyToOne(() => ServiceEntrepreneurEntity, () => CommunicationEntity, {
    eager: true,
  })
  @JoinColumn()
  serviceId: ServiceEntrepreneurEntity;

  @CreateDateColumn({ name: 'created_At', select: false })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At', select: false })
  updatedAt: Date;
}
