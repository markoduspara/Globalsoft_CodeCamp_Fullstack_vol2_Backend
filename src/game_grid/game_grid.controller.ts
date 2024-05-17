import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GameGridService } from './game_grid.service';
import { CreateGameGridDto } from './dto/create-game_grid.dto';
import { UpdateGameGridDto } from './dto/update-game_grid.dto';
import { GameGrid } from './entities/game_grid.entity';

@Controller('game-grid')
export class GameGridController {
  constructor(private readonly gameGridService: GameGridService) {}

  @Post()
  create(@Body() createGameGridDto: CreateGameGridDto): Promise<GameGrid> {
    return this.gameGridService.create(createGameGridDto);
  }

  @Get()
  findAll(): Promise<GameGrid[]> {
    return this.gameGridService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<GameGrid> {
    return this.gameGridService.findOne(+id);
  }
}
