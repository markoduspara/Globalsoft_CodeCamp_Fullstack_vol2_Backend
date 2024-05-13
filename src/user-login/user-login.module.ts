import { Module } from '@nestjs/common';
import { UserLoginService } from './user-login.service';
import { UserLoginController } from './user-login.controller';

@Module({
  controllers: [UserLoginController],
  providers: [UserLoginService],
})
export class UserLoginModule {}
