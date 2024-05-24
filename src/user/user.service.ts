import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { ResponseUserDto } from './dto/response-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<ResponseUserDto> {
    /*   try { */
    const userCreate = await this.usersRepository.save(createUserDto);
    return userCreate;
    /*  } catch (error) {
      throw new InternalServerErrorException(`${error.message}`);
    } */
  }

  findAll() {
    return this.usersRepository.find({});
  }

  findOne(id: number) {
    return this.usersRepository.findOne({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const userUpdate = await this.usersRepository.update(
      {
        id: id,
      },
      {
        username: updateUserDto.username,
        userPassword: updateUserDto.user_password,
      },
    );
    if (userUpdate.affected > 0) {
      return this.usersRepository.findOne({ where: { id } });
    } else {
      return { statusCode: '304' };
    }
  }
  async findbyName(name: string) {
    try {
      const user = await this.usersRepository.findOne({
        where: { username: name },
      });
      return { username: user.username };
    } catch (error) {
      throw new InternalServerErrorException(`${error.message}`);
    }
  }
  async findbyPass(pass: string) {
    try {
      const user = await this.usersRepository.findOne({
        where: { userPassword: pass },
      });
      return { username: user.username };
    } catch (error) {
      throw new InternalServerErrorException(`${error.message}`);
    }
  }
  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
