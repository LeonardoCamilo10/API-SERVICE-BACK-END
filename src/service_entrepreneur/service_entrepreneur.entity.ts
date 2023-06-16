import { CategoryEntity } from 'src/category/category.entity';
import { EntrepreneurEntity } from 'src/entrepreneur/entrepreneur.entity';

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
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

  @ManyToOne(() => CategoryEntity, () => ServiceEntrepreneurEntity)
  @JoinColumn()
  categoryId: CategoryEntity;

  @OneToOne(() => EntrepreneurEntity, () => ServiceEntrepreneurEntity)
  @JoinColumn()
  entrepreneur: EntrepreneurEntity;

  @Column()
  active: string;

  @CreateDateColumn({ name: 'created_At', select: false })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At', select: false })
  updatedAt: Date;
}
