import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserLoginService } from './user-login.service';
import { CreateUserLoginDto } from './dto/create-user-login.dto';

@Controller('user-login')
export class UserLoginController {
    constructor(private readonly userLoginService: UserLoginService) {}

    @Get()
    findAll() {
      return this.userLoginService.findAll();
    }

    @Post()
    create(@Body() createUserLoginDto: CreateUserLoginDto) {
      return this.userLoginService.create(createUserLoginDto);
    }
}
