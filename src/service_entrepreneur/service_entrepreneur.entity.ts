import { CategoryEntity } from 'src/category/category.entity';
import { CommunicationEntity } from 'src/communication/communication.entity';
import { EntrepreneurEntity } from 'src/entrepreneur/entrepreneur.entity';

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'service_entrepreneur' })
export class ServiceEntrepreneurEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @ManyToOne(() => CategoryEntity, () => ServiceEntrepreneurEntity, {
    eager: true,
  })
  @JoinColumn()
  categoryId: CategoryEntity;

  @ManyToOne(() => EntrepreneurEntity, () => ServiceEntrepreneurEntity, {
    eager: true,
  })
  @JoinColumn()
  entrepreneurId: EntrepreneurEntity;

  @Column()
  active: string;

  @OneToMany(() => CommunicationEntity, () => ServiceEntrepreneurEntity)
  communicationId: CommunicationEntity[];

  @CreateDateColumn({ name: 'created_At', select: false })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At', select: false })
  updatedAt: Date;
}
