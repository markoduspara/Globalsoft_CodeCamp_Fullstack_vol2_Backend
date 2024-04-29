create table gameGrid (
    id tinyint primary key AUTO_INCREMENT NOT NULL ,
    game_id tinyint NOT NULL ,
    stateValue varchar,
    n tinyint NOT NULL,
    FOREIGN KEY (game_id) REFERENCES game(id)
    UNIQUE KEY (game_id,n)
);