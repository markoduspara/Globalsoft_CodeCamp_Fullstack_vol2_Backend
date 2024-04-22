CREATE TABLE  `game_state` (
    `id`          INT     UNSIGNED    NOT NULL AUTO_INCREMENT,
    `name`        INT                 NOT NULL,
    `created_at` TIMESTAMP            DEFAULT CURRENT_TIMESTAMP NOT NULL,
    `updated_at` TIMESTAMP            DEFAULT CURRENT_TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE KEY gs_name (name)
);

