import { Module } from '@nestjs/common';
import { GameStateService } from './game_state.service';
import { GameStateController } from './game_state.controller';
import { GameState } from './entities/game_state.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([GameState])],
  controllers: [GameStateController],
  providers: [GameStateService],
})
export class GameStateModule {}
