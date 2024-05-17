import { PartialType } from '@nestjs/mapped-types';
import { CreateGameDto } from './create-game.dto';

export class UpdateGameDto extends PartialType(CreateGameDto) {
    user_1_game_state_id: number;
    user_2_game_state_id: number;
    n_game: boolean;
}
