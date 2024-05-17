import {
    Column,
    Entity,
    Index,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { User } from "../../user/entities/user.entity";
  
  @Index("uk_user_id", ["user_id"], { unique: true })
  @Entity("user_login", { schema: "db" })
  export class UserLogin {
    @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
    id: number;
  
    @Column("int", { name: "user_id", unsigned: true })
    user_id: number;
  
    @Column("varchar", { name: "ip", length: 225 })
    ip: string;
  
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
  
    @OneToOne(() => User, (user) => user.userLogin, {
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    })
    @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
    user: User;
  }
  