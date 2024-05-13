import {Model,Table,Column,DataType,Index,Sequelize,ForeignKey,} from 'sequelize-typescript';
import { CreateDateColumn, DeleteDateColumn, Entity, UpdateDateColumn } from 'typeorm';

  @Entity('game_state',{ schema: 'db' })
  export class GameState
  {
    @Column({ primaryKey: true, autoIncrement: true, type: DataType.TINYINT })
    id?: number;
  
    @Column({ type: DataType.STRING(64) })
    name!: string;
  
    @CreateDateColumn()
    createdAt: Date; 
   
    @UpdateDateColumn()
    updatedAt: Date; 
    
    @DeleteDateColumn()
    deletedAt: Date;
    nullable: true;
    default:null;
  }
  