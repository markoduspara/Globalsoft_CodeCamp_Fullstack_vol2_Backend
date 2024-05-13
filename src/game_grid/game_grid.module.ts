import { Module } from '@nestjs/common';
import { GameGridService } from './game_grid.service';
import { GameGridController } from './game_grid.controller';

@Module({
  controllers: [GameGridController],
  providers: [GameGridService],
})
export class GameGridModule {}
