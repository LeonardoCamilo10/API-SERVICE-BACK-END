import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'category' })
export class CategoryEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;
}
