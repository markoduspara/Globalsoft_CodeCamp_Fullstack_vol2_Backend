CREATE TABLE game (
    "id" INT AUTO_INCREMENT PRIMARY KEY,
    "player1Id" INT UNSIGNED NOT NULL,
    "player2Id" INT UNSIGNED NOT NULL,
    "player1State" int UNSIGNED NULL,
    "player2State" int UNSIGNED NULL,
    "n_game" tinyint [1] NOT NULL

    FOREIGN KEY("player1_id") REFERENCES "user"("id")
    FOREIGN KEY("player2_id") REFERENCES "user"("id")
    FOREIGN KEY("player1State") REFERENCES "game_state"("id")
    FOREIGN KEY("player2State") REFERENCES "game_state"("id")
);