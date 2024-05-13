import { Injectable } from '@nestjs/common';
import { CreateGameStateDto } from './dto/create-game_state.dto';
import { UpdateGameStateDto } from './dto/update-game_state.dto';

@Injectable()
export class GameStateService {
  create(createGameStateDto: CreateGameStateDto) {
    return 'This action adds a new gameState';
  }

  findAll() {
    return `This action returns all gameState`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gameState`;
  }

  update(id: number, updateGameStateDto: UpdateGameStateDto) {
    return `This action updates a #${id} gameState`;
  }

  remove(id: number) {
    return `This action removes a #${id} gameState`;
  }
}
