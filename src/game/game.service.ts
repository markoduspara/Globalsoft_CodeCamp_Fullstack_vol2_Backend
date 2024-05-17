import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { DeepPartial, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from './entities/game.entity';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game)
    private gamesRepository: Repository<Game>,
  ) {}
  
  async create(createGameDto: CreateGameDto): Promise<Game> {
    const game = this.gamesRepository.create(createGameDto as DeepPartial<Game>);
    await this.gamesRepository.save(game);
    return game;
  }

  findAll(): Promise<Game[]> {
    return this.gamesRepository.find({});
  }

  findOne(id: number): Promise<Game> {
    return this.gamesRepository.findOne({ where: { id } });
  }

  async update(id: number, updateGameDto: UpdateGameDto): Promise<Game | undefined> {
    const game = await this.gamesRepository.findOne({ where: { id } });
    if (!game) {
      return undefined; // or throw an error if you prefer
    }
  
    // Update the user properties
    Object.assign(game, updateGameDto);
  
    // Save the updated user
    await this.gamesRepository.save(game);
  
    return game;
  }

  remove(id: number): Promise<boolean> {
    return Promise.resolve(false);
  }
}