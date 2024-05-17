import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { UserLoginModule } from './user-login/user-login.module';
import { GameStateModule } from './game-state/game-state.module';
import { GameModule } from './game/game.module';
import { GameGridModule } from './game-grid/game-grid.module';
import { Game } from './game/entities/game.entity';
import { GameGrid } from './game-grid/entities/game-grid.entity';
import { GameState } from './game-state/entities/game-state.entity';
import { UserLogin } from './user-login/entities/user-login.entity';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'fullstack-db',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'db',
      entities: [User, Game, GameGrid, GameState, UserLogin],
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
