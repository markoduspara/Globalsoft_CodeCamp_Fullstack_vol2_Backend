import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { Game } from "../../game/entities/game.entity";
  
  @Index("game_id", ["gameId", "cellIndex"], { unique: true })
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
  
    @Column("timestamp", {
      name: "created_at",
      default: () => "CURRENT_TIMESTAMP",
    })
    createdAt: Date;
  
    @Column("timestamp", {
      name: "updated_at",
      default: () => "CURRENT_TIMESTAMP",
    })
    updatedAt: Date;
  
    @Column("timestamp", { name: "deleted_at", nullable: true })
    deletedAt: Date | null;
  
    @ManyToOne(() => Game, (game) => game.gameGrs, {
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    })
    @JoinColumn([{ name: "game_id", referencedColumnName: "id" }])
    game: Game;
  }
  