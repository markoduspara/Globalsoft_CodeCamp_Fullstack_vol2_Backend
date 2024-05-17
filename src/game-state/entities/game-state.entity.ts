import {
    Column,
    Entity,
    Index,
    OneToMany,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { Game } from "../../game/entities/game.entity";
  
  @Index("gs_name", ["name"], { unique: true })
  @Entity("game_state", { schema: "db" })
  export class GameState {
    @PrimaryGeneratedColumn({ type: "tinyint", name: "id", unsigned: true })
    id: number;
  
    @Column("varchar", { name: "name", unique: true, length: 64 })
    name: string;
  
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
  
    @OneToMany(() => Game, (game) => game.user_1GameState)
    games: Game[];
  
    @OneToMany(() => Game, (game) => game.user_2GameState)
    games2: Game[];
  }
  