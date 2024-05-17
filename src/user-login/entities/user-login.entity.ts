import {Column,CreateDateColumn,DeleteDateColumn,Entity,Index,JoinColumn,OneToOne,PrimaryGeneratedColumn,UpdateDateColumn,
} from "typeorm";
import { User } from "../../user/entities/user.entity";

/* @Index("uk_user_id", ["userId"], { unique: true })*/
@Entity("user_login", { schema: "db" })
export class UserLogin {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "user_id", unique: true, unsigned: true })
  userId: number;

  @Column("varchar", { name: "ip", length: 225 })
  ip: string;

  @CreateDateColumn()
  createdAt: Date; 
   
  @UpdateDateColumn()
  updatedAt: Date; 

  @DeleteDateColumn()
  deletedAt: Date;
  nullable: true;
  default:null;

  @OneToOne(() => User, (user) => user.userLogin, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: User;
}
