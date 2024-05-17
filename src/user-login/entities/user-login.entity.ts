import { Column, Entity, Index, PrimaryGeneratedColumn, Table, Timestamp } from 'typeorm';

@Entity('user_login', { schema: 'db' })
export class UserLogin {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column({
    type: 'int',
    name: 'user_id',
    nullable: false,
  })
  userId: number;

  @Column({ 
    type: 'varchar', 
    name: 'ip', 
    length: 225, 
    nullable: false 
  })
  ip: string;

//   @Column({
//     name: 'created_at',
//     nullable: false,
//   })
//   createdAt?: Timestamp; 
   
//   @Column({
//     name: 'updated_at',
//     nullable: false,
//   })
//   updatedAt?: Timestamp;

//   @Column({ name: 'deleted_at' })
//   deletedAt?: Timestamp; 
}
