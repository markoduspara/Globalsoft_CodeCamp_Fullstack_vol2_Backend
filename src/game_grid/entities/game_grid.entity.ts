import {Column,CreateDateColumn,DeleteDateColumn,Entity,Index,JoinColumn,ManyToOne,PrimaryGeneratedColumn, UpdateDateColumn,
} from "typeorm";
import { Game } from "../../game/entities/game.entity";

/* @Index("game_id", ["gameId", "cellIndex"], { unique: true }) */
@Entity("game_grid", { schema: "db" })
export class GameGrid {
  @PrimaryGeneratedColumn({ type: "tinyint", name: "id" })
  id: number;

  @Column("int", { name: "game_id" })
  gameId: number;

  @Column("varchar", { name: "cell_value", nullable: true, length: 1 })
  cellValue: string | null;

  @Column("tinyint", { name: "cell_index" })
  cellIndex: number;

  @CreateDateColumn()
  createdAt: Date; 
   
  @UpdateDateColumn()
  updatedAt: Date; 

  @DeleteDateColumn()
  deletedAt: Date;
  nullable: true;
  default:null;

  @ManyToOne(() => Game, (game) => game.gameGrs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "game_id", referencedColumnName: "id" }])
  game: Game;
}
