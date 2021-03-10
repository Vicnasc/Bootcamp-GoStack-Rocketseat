import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import PointItems from './point-items.entity';

@Entity('items')
export default class Items {
  @PrimaryGeneratedColumn('uuid')
  @OneToMany(() => PointItems, (point) => point.item_id)
  id: string;

  @Column('varchar')
  image: string;

  @Column('varchar')
  title: string;
}
