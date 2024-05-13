import { Test, TestingModule } from '@nestjs/testing';
import { GameStateController } from './game_state.controller';
import { GameStateService } from './game_state.service';

describe('GameStateController', () => {
  let controller: GameStateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameStateController],
      providers: [GameStateService],
    }).compile();

    controller = module.get<GameStateController>(GameStateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
