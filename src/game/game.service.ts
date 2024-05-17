import { Injectable, InternalServerErrorException } from '@nestjs/common';
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
  ) {}
  async create(createGameDto: CreateGameDto): Promise<ResponseGameDto> {
    try {
      const gameCreate = await this.gameRepository.save(createGameDto);
      return { id: gameCreate.id };
    } catch (error) {
      throw new InternalServerErrorException(`${error.message}`);
    }
  }

  findAll() {
    return this.gameRepository.find({});
  }

  findOne(id: number) {
    return this.gameRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateGameDto: UpdateGameDto,
  ): Promise<ResponseGameDto> {
    try {
      const gameUpdate = await this.gameRepository.update(id, updateGameDto);
      return this.gameRepository.findOne({ where: { id } });
    } catch (error) {
      throw new InternalServerErrorException(`${error.message}`);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} game`;
  }
}
