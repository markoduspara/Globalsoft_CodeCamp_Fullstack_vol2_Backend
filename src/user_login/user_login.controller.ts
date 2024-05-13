import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserLoginService } from './user_login.service';
import { CreateUserLoginDto } from './dto/create-user_login.dto';
import { UpdateUserLoginDto } from './dto/update-user_login.dto';

@Controller('user-login')
export class UserLoginController {
  constructor(private readonly userLoginService: UserLoginService) {}

  @Post()
  create(@Body() createUserLoginDto: CreateUserLoginDto) {
    return this.userLoginService.create(createUserLoginDto);
  }

  @Get()
  findAll() {
    return this.userLoginService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userLoginService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserLoginDto: UpdateUserLoginDto) {
    return this.userLoginService.update(+id, updateUserLoginDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userLoginService.remove(+id);
  }
}
