import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { UserLoginModule } from './user_login/user_login.module';
import { GameStateModule } from './game_state/game_state.module';
import { GameModule } from './game/game.module';
import { GameGridModule } from './game_grid/game_grid.module';
import { Game } from './game/entities/game.entity';
import { GameGrid } from './game_grid/entities/game_grid.entity';
import { GameState } from './game_state/entities/game_state.entity';
import { UserLogin } from './user_login/entities/user_login.entity';

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
      entities: [User,Game,GameGrid,GameState,UserLogin],
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
