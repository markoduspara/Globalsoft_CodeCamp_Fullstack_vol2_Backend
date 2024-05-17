import { Injectable } from '@nestjs/common';
import { CreateUserLoginDto } from './dto/create-user_login.dto';
import { UpdateUserLoginDto } from './dto/update-user_login.dto';
import { UserLogin } from './entities/user_login.entity';
import { DeepPartial, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserLoginService {
  constructor(
    @InjectRepository(UserLogin)
    private userLoginsRepository: Repository<UserLogin>,
  ) {}
  
  async create(createUserLoginDto: CreateUserLoginDto): Promise<UserLogin> {
    const userLogin = this.userLoginsRepository.create(createUserLoginDto as DeepPartial<UserLogin>);
    await this.userLoginsRepository.save(userLogin);
    return userLogin;
  }

  findAll(): Promise<UserLogin[]> {
    return this.userLoginsRepository.find({});
  }

  findOne(id: number): Promise<UserLogin> {
     return this.userLoginsRepository.findOne( { where: { id } } );
  }

  update(id: number, updateGameStateDto: UpdateUserLoginDto): Promise<boolean> {
    return Promise.resolve(false);
  }

  remove(id: number): Promise<boolean> {
    return Promise.resolve(true);
  }
}