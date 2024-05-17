import { Injectable } from '@nestjs/common';
import { CreateGameStateDto } from './dto/create-game_state.dto';
import { UpdateGameStateDto } from './dto/update-game_state.dto';
import { DeepPartial, Repository } from 'typeorm';
import { GameState } from './entities/game_state.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GameStateService {
  constructor(
    @InjectRepository(GameState)
    private gameStatesRepository: Repository<GameState>,
  ) {}
  
  async create(createGameStateDto: CreateGameStateDto):Promise <GameState>{
    const gameState = this.gameStatesRepository.create(createGameStateDto as DeepPartial<GameState>);
    await this.gameStatesRepository.save(gameState);
    return gameState;
  }

  findAll(): Promise<GameState[]> {
    return this.gameStatesRepository.find({});
  }

  findOne(id: number): Promise<GameState> {
    return this.gameStatesRepository.findOne({ where: { id } });
  }

  findByName(name: string): Promise<GameState[]> {
    return this.gameStatesRepository.findBy({name});
  }

  async update(id: number, updateGameStateDto: UpdateGameStateDto): Promise<GameState | undefined> {
    const gameState = await this.gameStatesRepository.findOne({ where: { id } });
    if (!gameState) {
      return undefined; // or throw an error if you prefer
    }
  
    // Update the user properties
    Object.assign(gameState, updateGameStateDto);
  
    // Save the updated user
    await this.gameStatesRepository.save(gameState);
  
    return gameState;
  }

  async remove(id: number): Promise<boolean> {
    const gameState = await this.gameStatesRepository.findOne({ where: { id } });
    if (!gameState) {
      return false; // or throw an error if you prefer
    }
  
    await this.gameStatesRepository.remove(gameState);
  
    return true;
  }
}