import { IsNotEmpty, Min, IsInt } from 'class-validator';
import { BaseEntity } from '../entity/base.entity';
import { Entity, Column } from 'typeorm';

@Entity('users')
export class Users extends BaseEntity {
  @Column({ unique: true })
  @IsNotEmpty()
  login: string;

  @Column({ default: '' })
  username: string;

  @Column()
  @IsInt()
  age: number;

  @Column()
  @IsNotEmpty()
  @Min(6)
  password: string;
}
