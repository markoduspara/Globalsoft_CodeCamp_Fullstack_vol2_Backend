import {Model,Table,Column,DataType,Index,Sequelize,ForeignKey,
} from 'sequelize-typescript';
import { CreateDateColumn, DeleteDateColumn, Entity, UpdateDateColumn } from 'typeorm';

@Entity('game_grid',{ schema: 'db' })
export class GameGrid
{
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.TINYINT })
  id?: number;

  @Column({ type: DataType.INTEGER })
  game_id!: number;

  @Column({ allowNull: true, type: DataType.STRING(1) })
  cell_value?: string;

  @Column({ type: DataType.TINYINT })
  cell_index!: number;

  @CreateDateColumn()
  createdAt: Date; 
   
  @UpdateDateColumn()
  updatedAt: Date; 

  @DeleteDateColumn()
  deletedAt: Date;
  nullable: true;
  default:null;
}
