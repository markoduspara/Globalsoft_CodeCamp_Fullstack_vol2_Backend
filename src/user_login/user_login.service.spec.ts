import { Test, TestingModule } from '@nestjs/testing';
import { UserLoginService } from './user_login.service';

describe('UserLoginService', () => {
  let service: UserLoginService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserLoginService],
    }).compile();

    service = module.get<UserLoginService>(UserLoginService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
