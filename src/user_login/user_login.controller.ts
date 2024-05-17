import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserLoginService } from './user_login.service';
import { CreateUserLoginDto } from './dto/create-user_login.dto';
import { UpdateUserLoginDto } from './dto/update-user_login.dto';
import { UserLogin } from './entities/user_login.entity';

@Controller('user-login')
export class UserLoginController {
  constructor(private readonly userLoginService: UserLoginService) {}

  @Post()
  create(@Body() createUserLoginDto: CreateUserLoginDto): Promise<UserLogin> {
    return this.userLoginService.create(createUserLoginDto);
  }

  @Get()
  findAll(): Promise<UserLogin[]> {
    return this.userLoginService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<UserLogin> {
    return this.userLoginService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGameDto: UpdateUserLoginDto): Promise<boolean> {
    return this.userLoginService.update(+id, updateGameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string):Promise<boolean> {
    return this.userLoginService.remove(+id);
  }
}
