USE db;

-- The 'username' column is a unique record in the user table
CREATE TABLE IF NOT EXISTS user (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    username VARCHAR(64) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP    DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP    DEFAULT CURRENT_TIMESTAMP NOT NULL ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP    NULL,
    PRIMARY KEY (id),
    UNIQUE KEY uk_name (username)
);

-- The 'ip' column is ip adress of user
CREATE TABLE IF NOT EXISTS user_login (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    user_id  INT UNSIGNED NOT NULL,
    ip  VARCHAR(225) NOT NULL,
    created_at TIMESTAMP    DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP    DEFAULT CURRENT_TIMESTAMP NOT NULL ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP    NULL,
    PRIMARY KEY pk_id (id),
    UNIQUE KEY uk_user_id (user_id),
    FOREIGN KEY fk_user_id (user_id) REFERENCES user(id)
);

/* The 'name' column is status of Game:
    Win - Win of the home player or player1
    Draw - Draw 
    Lose - Win of the guest player or player2
*/
CREATE TABLE IF NOT EXISTS  game_state (
    id          TINYINT     UNSIGNED    NOT NULL AUTO_INCREMENT,
    name       TINYINT                 NOT NULL, 
    created_at TIMESTAMP    DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP    DEFAULT CURRENT_TIMESTAMP NOT NULL ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP    NULL,
    PRIMARY KEY (id),
    UNIQUE KEY gs_name (name)
);

/* The 'n_game' column is dimension of the game
   The 'first_move' column is the mark of which user performs the first move
    0 - Palyer1 - first move performs home player or player1
    1 - Player2 - first move performs guest player or player2
*/
CREATE TABLE IF NOT EXISTS game (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_1_id INT UNSIGNED NOT NULL,
    user_2_id INT UNSIGNED NOT NULL,
    user_1_game_state_id TINYINT UNSIGNED NULL,
    user_2_game_state_id TINYINT UNSIGNED NULL,
    n_game TINYINT NOT NULL,
    first_move TINYINT NOT NULL,

    created_at TIMESTAMP    DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP    DEFAULT CURRENT_TIMESTAMP NOT NULL ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP    NULL,

    FOREIGN KEY(user_1_id) REFERENCES user(id),
    FOREIGN KEY(user_2_id) REFERENCES user(id),
    FOREIGN KEY(user_1_game_state_id) REFERENCES game_state(id),
    FOREIGN KEY(user_2_game_state_id) REFERENCES game_state(id)
);

/* The 'cell_index' mark number of cell koja je odigrana
   The 'cell_value' is mark which played
    x - mark of player1
    o - mark of player2
*/
CREATE TABLE IF NOT EXISTS game_grid (
    id TINYINT primary key AUTO_INCREMENT NOT NULL ,
    game_id INT NOT NULL ,
    cell_value VARCHAR(1)  NULL,
    cell_index TINYINT NOT NULL,
    created_at TIMESTAMP    DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP    DEFAULT CURRENT_TIMESTAMP NOT NULL ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP    NULL,
    FOREIGN KEY (game_id) REFERENCES game(id),
    UNIQUE KEY (game_id,cell_index)
);

INSERT INTO game_state (name) VALUES
('Win'),
('Lose'),
('Draw');

INSERT INTO user (username, user_password) VALUES
('admin', 'admin');

INSERT INTO user (username, user_password) VALUES
('admin1', 'admin1');
INSERT INTO user_login (user_id, ip)

SELECT id, '127.0.0.1' FROM user WHERE username = 'admin';

INSERT INTO user_login (user_id, ip)
SELECT id, '127.0.0.1' FROM user WHERE username = 'admin1';

INSERT INTO game (user_1_id, user_2_id, user_1_game_state_id, user_2_game_state_id, n_game, first_move)
SELECT u1.id, u2.id, gs1.id, gs2.id, 3, Player1
FROM user u1, user u2,
game_state gs1, game_state gs2
WHERE u1.username = 'admin' AND u2.username = 'admin1'
and gs1.name = 'Draw' and gs2.name = 'Draw';

INSERT INTO game (user_1_id, user_2_id, user_1_game_state_id, user_2_game_state_id, n_game)
SELECT u1.id, u2.id, gs1.id, gs2.id, 3, Player2
FROM user u1, user u2,
game_state gs1, game_state gs2
WHERE u1.username = 'admin' AND u2.username = 'admin1'
and gs1.name = 'Win' and gs2.name = 'Lose';

INSERT INTO game (user_1_id, user_2_id,  n_game)
SELECT u1.id, u2.id,  3
FROM user u1, user u2
WHERE u1.username = 'admin' AND u2.username = 'admin1';

INSERT INTO game_grid (game_id, cell_value, cell_index)
SELECT g.id, 'X', 1 FROM game g
WHERE g.user_1_id = (SELECT id FROM user WHERE username = 'admin');