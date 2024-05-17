import { PartialType } from '@nestjs/mapped-types';
import { CreateGameGridDto } from './create-game-grid.dto';

export class UpdateGameGridDto extends PartialType(CreateGameGridDto) {
    cell_value: string;
    cell_index: number;
}
