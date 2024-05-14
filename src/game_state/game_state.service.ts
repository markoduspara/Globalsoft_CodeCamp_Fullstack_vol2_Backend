import { ConflictException, Injectable } from '@nestjs/common';
import { CreateGameStateDto } from './dto/create-game_state.dto';
import { UpdateGameStateDto } from './dto/update-game_state.dto';
import { GameState } from './entities/game_state.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameStateResponseDto } from 'src/game/dto/response-game.dto';

  @Injectable()
  export class GameStateService {
    constructor(
      @InjectRepository(GameState)
      private gamesatateRepository: Repository<GameState>,
    ) { }
    async create(createGameStateDto: CreateGameStateDto): Promise<GameStateResponseDto> {
      try {
        const userLogin = await this.gamesatateRepository.save(createGameStateDto);
        return { name: userLogin.name }
      } catch(error) {
        if (error.code === 'ER_DUP_ENTRY') {
          throw new ConflictException('Duplicate entry');
        } 
      }
    }
  findAll() {
    return this.gamesatateRepository.find({});
  }

  findOne(id: number) {
    return this.gamesatateRepository.findOne({ where: { id}});

  }

  update(id: number, updateGameStateDto: UpdateGameStateDto) {
    return `This action updates a #${id} gameState`;
  }

  remove(id: number) {
    return `This action removes a #${id} gameState`;
  }
}
