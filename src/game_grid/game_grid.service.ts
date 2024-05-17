import { Injectable } from '@nestjs/common';
import { CreateGameGridDto } from './dto/create-game_grid.dto';
import { UpdateGameGridDto } from './dto/update-game_grid.dto';
import { GameGrid } from './entities/game_grid.entity';
import { DeepPartial, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from 'src/game/entities/game.entity';

@Injectable()
export class GameGridService {
  constructor(
    @InjectRepository(GameGrid)
    private gamesRepository: Repository<Game>,
    private gameGridsRepository: Repository<GameGrid>,
  ) {}
  
  async create(createGameGridDto: CreateGameGridDto): Promise<GameGrid[]> {
    const count = await this.gameGridsRepository.count();
    //const gameId = await this.gameGridsRepository.getId()
    const onMove = count //+ await this.findFirstMove(gameId);
    if (onMove%2 === 0){
      const gameGrid = this.gameGridsRepository.create(createGameGridDto as DeepPartial<GameGrid>);
      await this.gameGridsRepository.save(gameGrid);
    }
    return this.gameGridsRepository.find({});
  }

  findAll(): Promise<GameGrid[]> {
    return this.gameGridsRepository.find({});
  }

  findOne(id: number): Promise<GameGrid> {
    return this.gameGridsRepository.findOne({ where: { id } });
  }

  findByName(name: string): Promise<number> {
    return this.gameGridsRepository.findOne({ select: ['id'], where: { name }});
  }

  async findFirstMove(gameId: number): Promise<number> {
    const firstMove = await this.gamesRepository.findOne( { select: ['first_move'], where: { id: gameId } });
    return firstMove? firstMove.first_move : 0;
  }

  update(id: number, updateGameStateDto: UpdateGameGridDto): Promise<boolean> {
    return Promise.resolve(false);
  }

  remove(id: number): Promise<boolean> {
    return Promise.resolve(false);
  }
}
