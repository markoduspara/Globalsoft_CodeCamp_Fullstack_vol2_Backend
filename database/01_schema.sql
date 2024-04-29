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