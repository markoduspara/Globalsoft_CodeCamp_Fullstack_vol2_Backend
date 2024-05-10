import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface userLoginAttributes {
  id?: number;
  userId: number;
  timeStamp: Date;
  ip: string;
}

@Table({ tableName: 'user_login', timestamps: false })
export class userLogin
  extends Model<userLoginAttributes, userLoginAttributes>
  implements userLoginAttributes
{
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  @Index({ name: 'PRIMARY', using: 'BTREE', order: 'ASC', unique: true })
  id?: number;

  @Column({ field: 'user_id', type: DataType.INTEGER })
  @Index({ name: 'uk_user_id', using: 'BTREE', order: 'ASC', unique: true })
  userId!: number;

  @Column({ field: 'time_stamp', type: DataType.DATE })
  timeStamp!: Date;

  @Column({ type: DataType.STRING(225) })
  ip!: string;
}
