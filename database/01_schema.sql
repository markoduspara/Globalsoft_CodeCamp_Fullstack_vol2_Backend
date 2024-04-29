CREATE TABLE IF NOT EXISTS user (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    username varchar(64) NOT NULL,
    'password' varchar(255) NOT NULL,
    created_at TIMESTAMP    DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP    DEFAULT CURRENT_TIMESTAMP NOT NULL ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP    NULL,
    PRIMARY KEY (id),
    UNIQUE KEY uk_name (username,'password')
);

CREATE TABLE user_login (
    id int unsigned NOT NULL AUTO_INCREMENT,
    user_id  int unsigned NOT NULL,
    time_stamp  timestamp NOT NULL,
    ip  varchar(225) NOT NULL,
    PRIMARY KEY pk_id (id),
    UNIQUE KEY uk_user_id (user_id),
    FOREIGN KEY fk_user_id (user_id) REFERENCES user(id)
);


CREATE TABLE  `game_state` (
    `id`          INT     UNSIGNED    NOT NULL AUTO_INCREMENT,
    `name`        INT                 NOT NULL,
    `created_at` TIMESTAMP            DEFAULT CURRENT_TIMESTAMP NOT NULL,
    `updated_at` TIMESTAMP            DEFAULT CURRENT_TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE KEY gs_name (name)
);

CREATE TABLE game (
    "id" INT AUTO_INCREMENT PRIMARY KEY,
    "player1Id" INT UNSIGNED NOT NULL,
    "player2Id" INT UNSIGNED NOT NULL,
    "player1State" int UNSIGNED NULL,
    "player2State" int UNSIGNED NULL,
    "n_game" tinyint(1) NOT NULL

    FOREIGN KEY("player1_id") REFERENCES "user"("id")
    FOREIGN KEY("player2_id") REFERENCES "user"("id")
    FOREIGN KEY("player1State") REFERENCES "game_state"("id")
    FOREIGN KEY("player2State") REFERENCES "game_state"("id")
);

create table gameGrid (
    id tinyint primary key AUTO_INCREMENT NOT NULL ,
    game_id tinyint NOT NULL ,
    stateValue varchar,
    n tinyint NOT NULL,
    FOREIGN KEY (game_id) REFERENCES game(id)
    UNIQUE KEY (game_id,n)
);
