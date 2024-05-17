import { Module } from '@nestjs/common';
import { GameGridService } from './game_grid.service';
import { GameGridController } from './game_grid.controller';
import { GameGrid } from './entities/game_grid.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([GameGrid])],
  controllers: [GameGridController],
  providers: [GameGridService],
})
export class GameGridModule {}
