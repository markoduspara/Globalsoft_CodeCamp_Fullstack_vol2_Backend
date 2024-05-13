import { Test, TestingModule } from '@nestjs/testing';
import { UserLoginController } from './user_login.controller';
import { UserLoginService } from './user_login.service';

describe('UserLoginController', () => {
  let controller: UserLoginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserLoginController],
      providers: [UserLoginService],
    }).compile();

    controller = module.get<UserLoginController>(UserLoginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
