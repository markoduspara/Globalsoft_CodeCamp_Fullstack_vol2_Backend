import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto extends PartialType(User) {
  @ApiProperty({
    description: 'Username must be email',
    example: 'admin@test.com',
    minimum: 1,
  })
  @IsEmail()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    description: 'Username of the user',
    example: 'userpassword',
    minimum: 1,
  })
  @IsNotEmpty()
  userPassword: string;
}
