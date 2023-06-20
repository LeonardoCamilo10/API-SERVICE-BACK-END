import { ServiceEntrepreneurEntity } from 'src/service_entrepreneur/service_entrepreneur.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'category' })
export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => ServiceEntrepreneurEntity, () => CategoryEntity)
  serviceId: ServiceEntrepreneurEntity[];

  @CreateDateColumn({ name: 'created_At', select: false })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At', select: false })
  updatedAt: Date;
}
