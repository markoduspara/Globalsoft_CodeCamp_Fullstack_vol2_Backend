import { PartialType } from '@nestjs/mapped-types';
import { CreateUserLoginDto } from './create-user-login.dto';

export class UpdateUserLoginDto extends PartialType(CreateUserLoginDto) {}
