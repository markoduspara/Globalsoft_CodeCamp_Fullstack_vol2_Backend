import { Test, TestingModule } from '@nestjs/testing';
import { GameGridService } from './game-grid.service';

describe('GameGridService', () => {
  let service: GameGridService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameGridService],
    }).compile();

    service = module.get<GameGridService>(GameGridService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
