import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserInterface } from 'src/interfaces/user.interface';
import { ServiceEntrepreneurEntity } from 'src/service_entrepreneur/service_entrepreneur.entity';

@Entity({ name: 'entrepreneur' })
export class EntrepreneurEntity implements UserInterface {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  cnpj: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => ServiceEntrepreneurEntity, () => EntrepreneurEntity)
  serviceId: ServiceEntrepreneurEntity[];

  @CreateDateColumn({ name: 'created_At', select: false })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At', select: false })
  updatedAt: Date;
}
