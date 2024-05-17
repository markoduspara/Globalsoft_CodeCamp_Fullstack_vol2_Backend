import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateGameGridDto } from './dto/create-game-grid.dto';
import { UpdateGameGridDto } from './dto/update-game-grid.dto';
import { GameGrid } from './entities/game-grid.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResponseGameGridDto } from './dto/response-game-grid.dto';

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
      else throw new InternalServerErrorException(`${error.message}`);
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
      throw new InternalServerErrorException(`${error.message}`);
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
      throw new InternalServerErrorException(`${error.message}`);
    }
  }


  remove(id: number) {
    return `This action removes a #${id} gameGrid`;
  }
}
