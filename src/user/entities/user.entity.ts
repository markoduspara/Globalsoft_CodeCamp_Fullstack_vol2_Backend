import { Column, Entity, Index, PrimaryGeneratedColumn, Table } from 'typeorm';

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
