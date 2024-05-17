import { Module } from '@nestjs/common';
import { UserLoginController } from './user-login.controller';
import { UserLogin } from './entities/user-login.entity';
import { UserLoginService } from './user-login.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([UserLogin])],
    controllers: [UserLoginController],
    providers: [UserLoginService],
})
export class UserLoginModule {}
