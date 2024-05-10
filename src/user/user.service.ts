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
    return this.usersRepository.find({});
  }

  async findByUsername(username: string) {
    const usersByUsername = await this.usersRepository.find({ 
      where: { username: ILike(`%${username}%`)}
    });

    if(usersByUsername.length == 0) {
      throw new NotFoundException();
    }
    
    return usersByUsername;
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
