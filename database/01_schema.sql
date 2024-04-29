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

