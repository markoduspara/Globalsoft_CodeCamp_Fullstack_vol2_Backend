import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginDto } from './dto/login.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.userService.create(createUserDto);
  }

  @Get('/login')
  login(@Query() loginDto: LoginDto) {
    return this.userService.login(loginDto);
  }

  /* @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  } */
  /*  @Get('findbyname/:name')
  findbyName(@Param('name') name: string) {
    return this.userService.findbyName(name);
  }
  @Get('findbypass/:pass')
  findbyPass(@Param('pass') pass: string) {
    return this.userService.findbyPass(pass);
  } */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
