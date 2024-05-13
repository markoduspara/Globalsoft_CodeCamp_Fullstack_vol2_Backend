import { Module } from '@nestjs/common';
import { GameGridService } from './game_grid.service';
import { GameGridController } from './game_grid.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameGrid } from './entities/game_grid.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GameGrid])],
  controllers: [GameGridController],
  providers: [GameGridService],
})
export class GameGridModule {}
