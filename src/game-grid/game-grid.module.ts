import { Module } from '@nestjs/common';
import { GameGridService } from './game-grid.service';
import { GameGridController } from './game-grid.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameGrid } from './entities/game-grid.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GameGrid])],
  controllers: [GameGridController],
  providers: [GameGridService],
})
export class GameGridModule {}
