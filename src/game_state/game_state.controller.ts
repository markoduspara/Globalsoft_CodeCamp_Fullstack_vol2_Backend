import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GameStateService } from './game_state.service';
import { CreateGameStateDto } from './dto/create-game_state.dto';
import { UpdateGameStateDto } from './dto/update-game_state.dto';
import { GameState } from './entities/game_state.entity';

@Controller('game-state')
export class GameStateController {
  constructor(private readonly gameStateService: GameStateService) {}

  @Post()
  create(@Body() createGameStateDto: CreateGameStateDto):Promise<GameState> {
    return this.gameStateService.create(createGameStateDto);
  }

  @Get()
  findAll(): Promise<GameState[]> {
    return this.gameStateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) : Promise<GameState> {
    return this.gameStateService.findOne(+id);
  }

  @Get(':name')
  findByName(@Param('name') name: string): Promise<GameState[]> {
    return this.gameStateService.findByName(name);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGameStateDto: UpdateGameStateDto): Promise<GameState | undefined> {
    return this.gameStateService.update(+id, updateGameStateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string):Promise<boolean> {
    return this.gameStateService.remove(+id);
  }
}