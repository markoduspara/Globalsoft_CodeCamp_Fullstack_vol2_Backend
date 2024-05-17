import { Module } from '@nestjs/common';
import { UserLoginService } from './user-login.service';
import { UserLoginController } from './user-login.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserLogin } from './entities/user-login.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserLogin])],
  controllers: [UserLoginController],
  providers: [UserLoginService],
})
export class UserLoginModule {}
