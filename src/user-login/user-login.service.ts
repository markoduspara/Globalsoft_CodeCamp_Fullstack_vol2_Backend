import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserLoginDto } from './dto/create-user-login.dto';
import { UpdateUserLoginDto } from './dto/update-user-login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserLogin } from './entities/user-login.entity';
import { Repository } from 'typeorm';
import { UserLoginResponseDto } from './dto/response-user-login.dto';

@Injectable()
export class UserLoginService {
  constructor(
    @InjectRepository(UserLogin)
    private userloginRepository: Repository<UserLogin>,
  ) {}
  async create(
    createUserLoginDto: CreateUserLoginDto,
  ): Promise<UserLoginResponseDto> {
    try {
      const userLogin = await this.userloginRepository.save(createUserLoginDto);
      return { id: userLogin.id };
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Duplicate entry');
      }
    }
  }

  findAll() {
    //
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
