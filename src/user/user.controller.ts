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
import { ApiBadRequestResponse, ApiBody, ApiResponse } from '@nestjs/swagger';
import { ResponseUserDto } from './dto/response-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 201, type: ResponseUserDto })
  @ApiBadRequestResponse({ status: 400, type: String })
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<ResponseUserDto> {
    return await this.userService.create(createUserDto);
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
