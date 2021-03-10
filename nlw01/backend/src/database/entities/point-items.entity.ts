import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import Items from './items.entity';
import Points from './points.entity';

@Entity('point_items')
export default class PointItems {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Points, (point) => point.id)
  @JoinColumn({
    name: 'point_id',
    referencedColumnName: 'id',
  })
  point_id: Points;

  @ManyToOne(() => Items, (item) => item.id)
  @JoinColumn({
    name: 'item_id',
    referencedColumnName: 'id',
  })
  item_id: Items;
}
