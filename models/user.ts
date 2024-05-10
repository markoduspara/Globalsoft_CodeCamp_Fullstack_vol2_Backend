import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface userAttributes {
  id?: number;
  username: string;
  pass: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

@Table({ tableName: 'user', timestamps: false })
export class user
  extends Model<userAttributes, userAttributes>
  implements userAttributes
{
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  @Index({ name: 'PRIMARY', using: 'BTREE', order: 'ASC', unique: true })
  id?: number;

  @Column({ type: DataType.STRING(64) })
  @Index({ name: 'uk_name', using: 'BTREE', order: 'ASC', unique: true })
  username!: string;

  @Column({ type: DataType.STRING(255) })
  @Index({ name: 'uk_name', using: 'BTREE', order: 'ASC', unique: true })
  pass!: string;

  @Column({
    field: 'created_at',
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  createdAt?: Date;

  @Column({
    field: 'updated_at',
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  updatedAt?: Date;

  @Column({ field: 'deleted_at', allowNull: true, type: DataType.DATE })
  deletedAt?: Date;
}
