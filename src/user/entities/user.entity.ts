import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Game } from '../../game/entities/game.entity';
import { UserLogin } from '../../user-login/entities/user-login.entity';
import { IsEmail } from 'class-validator';

@Entity('user', { schema: 'db' })
export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'username', length: 64 })
  @IsEmail()
  username: string;

  @Column('varchar', { name: 'user_password', length: 255 })
  userPassword: string;

  @OneToMany(() => Game, (game) => game.user_1)
  games: Game[];

  @OneToMany(() => Game, (game) => game.user_2)
  games2: Game[];

  @OneToOne(() => UserLogin, (userLogin) => userLogin.user)
  userLogin: UserLogin;
}
