import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, PrimaryGeneratedColumn, Table, UpdateDateColumn } from 'typeorm';


@Entity('user', { schema: 'db' })
export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column({
    type: 'varchar',
    name: 'username',
    length: 64,
    nullable: false,
  })
  username: string;

  @Column({ type: 'varchar', name: 'user_password', nullable: false })
  userPassword: string;

  @CreateDateColumn()
  createdAt: Date; 
   
  @UpdateDateColumn()
  updatedAt: Date; 

  @DeleteDateColumn()
  deletedAt: Date;
  nullable: true;
  default:null;
}

