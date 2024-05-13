import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { User } from "../../user/entities/user.entity";
  import { GameState } from "../../game_state/entities/game_state.entity";
  import { GameGrid } from "../../game_grid/entities/game_grid.entity";
  
  @Index("user_1_game_state_id", ["user_1GameStateId"], {})
  @Index("user_1_id", ["user_1Id"], {})
  @Index("user_2_game_state_id", ["user_2GameStateId"], {})
  @Index("user_2_id", ["user_2Id"], {})
  @Entity("game", { schema: "db" })
  export class Game {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;
  
    @Column("int", { name: "user_1_id", unsigned: true })
    user_1Id: number;
  
    @Column("int", { name: "user_2_id", unsigned: true })
    user_2Id: number;
  
    @Column("tinyint", {
      name: "user_1_game_state_id",
      nullable: true,
      unsigned: true,
    })
    user_1GameStateId: number | null;
  
    @Column("tinyint", {
      name: "user_2_game_state_id",
      nullable: true,
      unsigned: true,
    })
    user_2GameStateId: number | null;
  
    @Column("tinyint", { name: "n_game", width: 1 })
    nGame: boolean;
  
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
  
    @ManyToOne(() => User, (user) => user.games, {
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    })
    @JoinColumn([{ name: "user_1_id", referencedColumnName: "id" }])
    user_1: User;
  
    @ManyToOne(() => User, (user) => user.games2, {
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    })
    @JoinColumn([{ name: "user_2_id", referencedColumnName: "id" }])
    user_2: User;
  
    @ManyToOne(() => GameState, (gameState) => gameState.games, {
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    })
    @JoinColumn([{ name: "user_1_game_state_id", referencedColumnName: "id" }])
    user_1GameState: GameState;
  
    @ManyToOne(() => GameState, (gameState) => gameState.games2, {
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    })
    @JoinColumn([{ name: "user_2_game_state_id", referencedColumnName: "id" }])
    user_2GameState: GameState;
  
    @OneToMany(() => GameGrid, (gameGrid) => gameGrid.game)
    gameGrs: GameGrid[];
  }
  