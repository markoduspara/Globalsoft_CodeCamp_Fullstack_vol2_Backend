import { Column, Entity, Index, PrimaryGeneratedColumn, Table } from 'typeorm';

@Entity('game_state', { schema: 'db' })
export class GameState {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column({
    type: 'varchar',
    name: 'name',
    length: 64,
    nullable: false,
  })
  name: string;
  
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
