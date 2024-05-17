import { Column, Entity, Index, PrimaryGeneratedColumn, TableForeignKey, Table, JoinColumn } from 'typeorm';

@Entity('game', { schema: 'db' })
export class Game {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column({ type: 'int', name: 'user_1_id', unsigned: true })
  user_1_id: number;

  @JoinColumn({ name: 'user_1_id' })
  user_1: Game; // Assuming Game has a one-to-many relationship with itself

  @Column({ type: 'int', name: 'user_2_id', unsigned: true })
  user_2_id: number;

  @JoinColumn({ name: 'user_2_id' })
  user_2: Game; // Assuming Game has a one-to-many relationship with itself

  @Column({ type: 'int', name: 'user_1_game_state_id', unsigned: true })
  user_1_game_state_id: number;

  @JoinColumn({ name: 'user_1_game_state_id' })
  game_state_1: Game; // Assuming Game has a one-to-many relationship with itself

  @Column({ type: 'int', name: 'user_2_game_state_id', unsigned: true })
  user_2_game_state_id: number;

  @JoinColumn({ name: 'user_2_game_state_id' })
  game_state_2: Game; // Assuming Game has a one-to-many relationship with itself

  @Column({
    type: 'tinyint',
    name: 'n_game',
    length: 1,
    nullable: false,
  })
  n_game: number;

  @Column({
    type: 'tinyint',
    name: 'first_move',
    length: 1,
    nullable: false,
  })
  first_move: number;

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