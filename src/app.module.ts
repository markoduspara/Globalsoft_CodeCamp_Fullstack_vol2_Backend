import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { UserLogin } from './user_login/entities/user_login.entity';
import { UserLoginService } from './user_login/user_login.service';
import { UserLoginModule } from './user_login/user_login.module';
import { GameState } from './game_state/entities/game_state.entity';
import { GameStateService } from './game_state/game_state.service';
import { GameStateModule } from './game_state/game_state.module';
import { Game } from './game/entities/game.entity';
import { GameService } from './game/game.service';
import { GameModule } from './game/game.module';
import { GameGrid } from './game_grid/entities/game_grid.entity';
import { GameGridService } from './game_grid/game_grid.service';
import { GameGridModule } from './game_grid/game_grid.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'db',
      entities: [User],
      synchronize: true,
    }),
    UserLoginModule,
    GameStateModule,
    GameModule,
    GameGridModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
