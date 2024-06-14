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
      const user_1 = await this.gameRepository.findOne({ select: { id: true }, where: {user_1_id: createGameDto.user_1_id } })
      const user_2 = await this.gameRepository.findOne({ select: { id: true }, where: {user_2_id: createGameDto.user_2_id } })
      if (user_1 == null){
        const gameCreate = await this.gameRepository.save(createGameDto);
      }else if (user_2 == null){
        const gameCreate = await this.gameRepository.save( { user_2_id: createGameDto.user_2_id } );
        return { id: gameCreate.id };
      }else if (user_1 != null && user_2 != null){
        const gameCreate = await this.gameRepository.findOne({where: {user_1_id: createGameDto.user_1_id, user_2_id: createGameDto.user_2_id } });
        return { id: gameCreate.id };
      }
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