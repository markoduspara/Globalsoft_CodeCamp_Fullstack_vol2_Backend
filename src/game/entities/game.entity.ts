import {Model,Table,Column,DataType,Index,Sequelize,ForeignKey,
} from 'sequelize-typescript';
import { CreateDateColumn, DeleteDateColumn, Entity, UpdateDateColumn } from 'typeorm';

@Entity('game', { schema: 'db' })
export class Game
{
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  id?: number;

  @Column({ type: DataType.INTEGER })
  user_1_id!: number;

  @Column({ type: DataType.INTEGER })
  user_2_id!: number;

  @Column({ allowNull: true, type: DataType.TINYINT })
  user_1_game_state_id?: number;

  @Column({ allowNull: true, type: DataType.TINYINT })
  user_2_game_state_id?: number;

  @Column({ type: DataType.TINYINT })
  n_game!: number;

  @CreateDateColumn()
  createdAt: Date; 
   
  @UpdateDateColumn()
  updatedAt: Date; 

  @DeleteDateColumn()
  deletedAt: Date;
  nullable: true;
  default:null;
}
