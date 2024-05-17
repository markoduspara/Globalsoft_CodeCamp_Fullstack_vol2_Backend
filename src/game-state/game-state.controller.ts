import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GameStateService } from './game-state.service';
import { CreateGameStateDto } from './dto/create-game-state.dto';
import { UpdateGameStateDto } from './dto/update-game-state.dto';

@Controller('game-state')
export class GameStateController {
  constructor(private readonly gameStateService: GameStateService) {}

  @Post()
  create(@Body() createGameStateDto: CreateGameStateDto) {
    return this.gameStateService.create(createGameStateDto);
  }

  @Get()
  findAll() {
    return this.gameStateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gameStateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGameStateDto: UpdateGameStateDto) {
    return this.gameStateService.update(+id, updateGameStateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gameStateService.remove(+id);
  }
}
