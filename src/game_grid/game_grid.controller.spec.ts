import { Test, TestingModule } from '@nestjs/testing';
import { GameGridController } from './game_grid.controller';
import { GameGridService } from './game_grid.service';

describe('GameGridController', () => {
  let controller: GameGridController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameGridController],
      providers: [GameGridService],
    }).compile();

    controller = module.get<GameGridController>(GameGridController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
