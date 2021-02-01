import { IsNotEmpty, Min, IsInt } from 'class-validator';
import { BaseEntity } from '../common/base.entity';
import { Entity, Column, Unique } from 'typeorm';

@Entity('users')
@Unique(['login'])
export class Users extends BaseEntity {
  @Column({ unique: true })
  @IsNotEmpty()
  login: string;

  @Column()
  @IsNotEmpty()
  @Min(6)
  password: string;

  @Column({ default: '' })
  username: string;

  @Column()
  @IsInt()
  age: number;
}
