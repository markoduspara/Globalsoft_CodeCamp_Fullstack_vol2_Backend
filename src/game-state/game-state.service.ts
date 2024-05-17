import { ConflictException, Injectable } from '@nestjs/common';
import { CreateGameStateDto } from './dto/create-game-state.dto';
import { UpdateGameStateDto } from './dto/update-game-state.dto';
import { GameState } from './entities/game-state.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResponseGameStateDto } from './dto/response-game-state.dto ';

  @Injectable()
  export class GameStateService {
    constructor(
      @InjectRepository(GameState)
      private gamestateRepository: Repository<GameState>,
    ) { }
    async create(createGameStateDto: CreateGameStateDto): Promise<ResponseGameStateDto> {
      try {
        const userLogin = await this.gamestateRepository.save(createGameStateDto);
        return { name: userLogin.name }
      } catch(error) {
        if (error.code === 'ER_DUP_ENTRY') {
          throw new ConflictException('Duplicate entry');
        } 
      }
    }
  findAll() {
    return this.gamestateRepository.find({});
  }

  findOne(id: number) {
    return this.gamestateRepository.findOne({ where: { id}});

  }

  update(id: number, updateGameStateDto: UpdateGameStateDto) {
    return `This action updates a #${id} gameState`;
  }

  remove(id: number) {
    return `This action removes a #${id} gameState`;
  }
}
