import { Injectable } from '@nestjs/common';
import { CreateGameGridDto } from './dto/create-game_grid.dto';
import { UpdateGameGridDto } from './dto/update-game_grid.dto';

@Injectable()
export class GameGridService {
  create(createGameGridDto: CreateGameGridDto) {
    return 'This action adds a new gameGrid';
  }

  findAll() {
    return `This action returns all gameGrid`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gameGrid`;
  }

  update(id: number, updateGameGridDto: UpdateGameGridDto) {
    return `This action updates a #${id} gameGrid`;
  }

  remove(id: number) {
    return `This action removes a #${id} gameGrid`;
  }
}
