import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from './entities/game.entity';
import { Repository } from 'typeorm';
import { ResponseGameDto } from './dto/response-game.dto';

@Injectable()
  export class GameService {
    constructor(
      @InjectRepository(Game)
      private gameRepository: Repository<Game>,
    ) { }
    async create(createGameDto: CreateGameDto): Promise<ResponseGameDto> {
      try {
        const gameCreate = await this.gameRepository.save(createGameDto);
        return { id: gameCreate.id }
      } catch(error) { 
        return error.message;
      }
    }

  findAll() {
    return this.gameRepository.find({});
  }

  findOne(id: number) {
    return this.gameRepository.findOne({ where: { id}});
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return `This action updates a #${id} game`;
  }

  remove(id: number) {
    return `This action removes a #${id} game`;
  }
}
