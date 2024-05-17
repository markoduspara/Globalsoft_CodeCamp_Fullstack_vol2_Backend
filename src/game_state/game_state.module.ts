import { Module } from '@nestjs/common';
import { GameStateService } from './game_state.service';
import { GameStateController } from './game_state.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameState } from './entities/game_state.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GameState])],
  controllers: [GameStateController],
  providers: [GameStateService],
})
export class GameStateModule {}
