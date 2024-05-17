import { Module } from '@nestjs/common';
import { UserLoginService } from './user_login.service';
import { UserLoginController } from './user_login.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserLogin } from './entities/user_login.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserLogin])],
  controllers: [UserLoginController],
  providers: [UserLoginService],
})
export class UserLoginModule {}
