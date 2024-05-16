import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateGameGridDto } from './dto/create-game_grid.dto';
import { UpdateGameGridDto } from './dto/update-game_grid.dto';
import { GameGrid } from './entities/game_grid.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResponseGameGridDto } from './dto/response-game_grid.dto';

@Injectable()
export class GameGridService {
  constructor(
    @InjectRepository(GameGrid)
    private gamegridRepository: Repository<GameGrid>,
  ) { }
  async create(createGameGridDto: CreateGameGridDto): Promise<ResponseGameGridDto> {
    try {
      const gameGrid = await this.gamegridRepository.save(createGameGridDto);
      return { game_id: gameGrid.game_id }
    } catch(error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Duplicate entry');
      } 
      else return error.message;
    }
  }

  findAll() {
    return this.gamegridRepository.find({});
  }

  async findbyGame(id: number) {
    try {
          const game = await this.gamegridRepository.find( {where: { game_id: id}});
          if(!game.length)
          {
            throw new NotFoundException();
          }
          return game;
    } catch(error) {
      return error.message;
    }
}

  findOne(id: number) {
    return this.gamegridRepository.findOne({ where: { id}});
  }

  async update(id: number, updateGameGridDto: UpdateGameGridDto): Promise<ResponseGameGridDto> {
    try
    {
      const gamegridUpdate = await this.gamegridRepository.update(id, updateGameGridDto);
      return this.gamegridRepository.findOne( { where: { id}});
    } catch(error) { 
      return error.message;
    }
  }


  remove(id: number) {
    return `This action removes a #${id} gameGrid`;
  }
}
