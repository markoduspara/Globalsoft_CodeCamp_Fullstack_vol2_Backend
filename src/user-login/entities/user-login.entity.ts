import {Model,Table,Column,DataType,Index,Sequelize,ForeignKey,
} from 'sequelize-typescript';
import { CreateDateColumn, DeleteDateColumn, Entity, UpdateDateColumn } from 'typeorm';

@Entity('user_login',{ schema: 'db' })
export class UserLogin
{
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  id?: number;

  @Column({ type: DataType.INTEGER })
  user_id!: number;

  @Column({ type: DataType.STRING(225) })
  ip!: string;

  @CreateDateColumn()
  createdAt: Date; 
   
  @UpdateDateColumn()
  updatedAt: Date; 

  @DeleteDateColumn()
  deletedAt: Date;
  nullable: true;
  default:null;
}
