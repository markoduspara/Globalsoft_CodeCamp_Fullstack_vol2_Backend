import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    return createUserDto;
  }

  findAll() {
    return this.usersRepository.find({
      select: ['id', 'username'], //SELECT id, username FROM user
      where: { username: 'admin' }, //WHERE username = 'admin'
    });
  }

  async find(password: string) {
    const [data, count] = await this.usersRepository.findAndCount({
      where: { userPassword: ILike('%' + password + '%') },
    });
    if (count === 0) throw new NotFoundException();

    return data;
  }

  findOne(id: number) {
    return this.usersRepository.findOne({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
