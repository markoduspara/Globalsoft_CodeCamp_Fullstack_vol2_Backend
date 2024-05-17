import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserLogin } from './entities/user-login.entity';
import { Repository } from 'typeorm';
import { CreateUserLoginDto } from './dto/create-user-login.dto';

@Injectable()
export class UserLoginService {
    constructor(
        @InjectRepository(UserLogin)
        private userLoginRepository: Repository<UserLogin>,
    ) {}

    findAll() {
        return this.userLoginRepository.find({});
    }

    async create(createUserLoginDto: CreateUserLoginDto) {
        const userLoginCreate = this.userLoginRepository.create(createUserLoginDto);
        console.log(userLoginCreate);
    }
}
