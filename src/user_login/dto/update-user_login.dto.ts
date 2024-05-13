import { PartialType } from '@nestjs/mapped-types';
import { CreateUserLoginDto } from './create-user_login.dto';

export class UpdateUserLoginDto extends PartialType(CreateUserLoginDto) {}
