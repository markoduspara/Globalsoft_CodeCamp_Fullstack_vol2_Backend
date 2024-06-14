import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ResponseUserDto {
  @ApiProperty({ type: String, example: 'user' })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ type: String, example: 'somePassword' })
  @IsNotEmpty()
  @IsString()
  userPassword: string;

  @ApiProperty({ type: Number, example: 1 })
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
