import { Injectable } from '@nestjs/common';
import { CreateUserLoginDto } from './dto/create-user_login.dto';
import { UpdateUserLoginDto } from './dto/update-user_login.dto';

@Injectable()
export class UserLoginService {
  create(createUserLoginDto: CreateUserLoginDto) {
    return 'This action adds a new userLogin';
  }

  findAll() {
    return `This action returns all userLogin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userLogin`;
  }

  update(id: number, updateUserLoginDto: UpdateUserLoginDto) {
    return `This action updates a #${id} userLogin`;
  }

  remove(id: number) {
    return `This action removes a #${id} userLogin`;
  }
}
