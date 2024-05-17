import { Column, Entity, Index, PrimaryGeneratedColumn, TableForeignKey, Table, JoinColumn } from 'typeorm';
import { ForeignKeyMetadata } from 'typeorm/metadata/ForeignKeyMetadata';

@Entity('user_login', { schema: 'db' })
export class UserLogin {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column({ type: 'int', name: 'user_id', unsigned: true })
  user_id: number;

  @JoinColumn({ name: 'user_id' })
  user: UserLogin; // Assuming GameState has a one-to-many relationship with itself

  @Column({
    type: 'varchar',
    name: 'cell_value',
    length: 1,
    nullable: false,
  })
  cell_value: string;

  @Column({
    type: 'tinyint',
    name: 'cell_index',
    nullable: false,
  })
  cell_index: string;

  /*   @Column({
    name: 'created_at',
    nullable: false,
  })
  createdAt?: Date; */
  /* 
  @Column({
    name: 'updated_at',
    nullable: false,
  })
  updatedAt?: Date;

  @Column({ name: 'deleted_at' })
  deletedAt?: Date; */
}