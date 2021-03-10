import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import Items from './items.entity';
import PointItems from './point-items.entity';

@Entity('points')
export default class Points {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  image: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  whatsapp: string;

  @Column({ type: 'decimal' })
  latitude: number;

  @Column({ type: 'decimal' })
  longitude: number;

  @Column()
  city: string;

  @Column({ type: 'varchar', length: '2' })
  uf: string;

  @OneToMany(() => PointItems, (item) => item.point_id)
  items: Items[];
}
