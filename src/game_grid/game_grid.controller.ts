import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GameGridService } from './game_grid.service';
import { CreateGameGridDto } from './dto/create-game_grid.dto';
import { UpdateGameGridDto } from './dto/update-game_grid.dto';

@Controller('game-grid')
export class GameGridController {
  constructor(private readonly gameGridService: GameGridService) {}

  @Post()
  create(@Body() createGameGridDto: CreateGameGridDto) {
    return this.gameGridService.create(createGameGridDto);
  }

  @Get()
  findAll() {
    return this.gameGridService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gameGridService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGameGridDto: UpdateGameGridDto) {
    return this.gameGridService.update(+id, updateGameGridDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gameGridService.remove(+id);
  }
}
