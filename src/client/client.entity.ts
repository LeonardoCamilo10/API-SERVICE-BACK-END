import { CommunicationEntity } from 'src/communication/communication.entity';
import { UserInterface } from 'src/interfaces/user.interface';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'client' })
export class ClientEntity implements UserInterface {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  cpf: string;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  @OneToMany(() => CommunicationEntity, () => ClientEntity)
  communicationId: CommunicationEntity[];

  @CreateDateColumn({ name: 'created_At', select: false })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At', select: false })
  updatedAt: Date;
}
