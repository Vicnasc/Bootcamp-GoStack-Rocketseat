import {
  Column,
  CreateDateColumn,
  Entity, JoinColumn, ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

import User from './User';
import Survey from './Survey';

@Entity('surveys_users')
export default class SurveyUser {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({name: "user_id"})
  user: User;

  @Column()
  survey_id: string;

  @ManyToOne(() => Survey)
  @JoinColumn({name: "survey_id"})
  survey: Survey;

  @Column()
  value: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
