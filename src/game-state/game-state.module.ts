import { Module } from '@nestjs/common';
import { GameStateService } from './game-state.service';
import { GameStateController } from './game-state.controller';
import { GameState } from './entities/game-state.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([GameState])],
  controllers: [GameStateController],
  providers: [GameStateService],
})
export class GameStateModule {}
