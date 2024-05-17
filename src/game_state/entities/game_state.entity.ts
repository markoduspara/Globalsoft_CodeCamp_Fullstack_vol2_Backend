import {Column,CreateDateColumn,DeleteDateColumn,Entity,Index,OneToMany,PrimaryGeneratedColumn, UpdateDateColumn,
} from "typeorm";
import { Game } from "../../game/entities/game.entity";

/* @Index("gs_name", ["name"], { unique: true }) */
@Entity("game_state", { schema: "db" })
export class GameState {
  @PrimaryGeneratedColumn({ type: "tinyint", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", unique: true, length: 64 })
  name: string;

  @CreateDateColumn()
  createdAt: Date; 
   
  @UpdateDateColumn()
  updatedAt: Date; 

  @DeleteDateColumn()
  deletedAt: Date;
  nullable: true;
  default:null;

  @OneToMany(() => Game, (game) => game.user_1GameState)
  games: Game[];

  @OneToMany(() => Game, (game) => game.user_2GameState)
  games2: Game[];
}
