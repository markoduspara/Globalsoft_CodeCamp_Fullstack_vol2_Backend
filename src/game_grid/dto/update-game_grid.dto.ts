import { PartialType } from '@nestjs/mapped-types';
import { CreateGameGridDto } from './create-game_grid.dto';

export class UpdateGameGridDto extends PartialType(CreateGameGridDto) {}
