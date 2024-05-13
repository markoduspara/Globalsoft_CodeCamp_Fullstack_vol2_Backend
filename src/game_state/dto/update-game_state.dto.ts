import { PartialType } from '@nestjs/mapped-types';
import { CreateGameStateDto } from './create-game_state.dto';

export class UpdateGameStateDto extends PartialType(CreateGameStateDto) {}
