import { ServiceEntrepreneurEntity } from 'src/service_entrepreneur/service_entrepreneur.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'category' })
export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => ServiceEntrepreneurEntity, () => CategoryEntity)
  serviceId: ServiceEntrepreneurEntity[];
}
