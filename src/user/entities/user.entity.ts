import {Column,CreateDateColumn,DeleteDateColumn,Entity,OneToMany,OneToOne,PrimaryGeneratedColumn,UpdateDateColumn,
} from "typeorm";
import { Game } from "../../game/entities/game.entity";
import { UserLogin } from "../../user-login/entities/user-login.entity";

@Entity("user", { schema: "db" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "username", length: 64 })
  userName: string;

  @Column("varchar", { name: "user_password", length: 255 })
  userPassword: string;

  @CreateDateColumn()
  createdAt: Date; 
   
  @UpdateDateColumn()
  updatedAt: Date; 

  @DeleteDateColumn()
  deletedAt: Date;
  nullable: true;
  default:null;

  @OneToMany(() => Game, (game) => game.user_1)
  games: Game[];

  @OneToMany(() => Game, (game) => game.user_2)
  games2: Game[];

  @OneToOne(() => UserLogin, (userLogin) => userLogin.user)
  userLogin: UserLogin;
}
