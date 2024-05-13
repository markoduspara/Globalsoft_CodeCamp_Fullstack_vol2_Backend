import { Module } from '@nestjs/common';
import { GameStateService } from './game_state.service';
import { GameStateController } from './game_state.controller';

@Module({
  controllers: [GameStateController],
  providers: [GameStateService],
})
export class GameStateModule {}
