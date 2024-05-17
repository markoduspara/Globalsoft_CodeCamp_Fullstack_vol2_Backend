import { Column, Entity, Index, PrimaryGeneratedColumn, TableForeignKey, Table, JoinColumn } from 'typeorm';
import { ForeignKeyMetadata } from 'typeorm/metadata/ForeignKeyMetadata';

@Entity('game_grid', { schema: 'db' })
export class GameGrid {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column({ type: 'int', name: 'game_id', unsigned: true })
  game_id: number;

  @JoinColumn({ name: 'game_id' })
  user: GameGrid; // Assuming GameState has a one-to-many relationship with itself

  @Column({
    type: 'varchar',
    name: 'ip',
    length: 255,
    nullable: false,
  })
  ip: string;

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