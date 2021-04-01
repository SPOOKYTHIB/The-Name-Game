SET GLOBAL local_infile = true;
CREATE DATABASE the_name_game;
USE the_name_game;
CREATE TABLE names (
    name CHAR(15) NOT NULL,
    id MEDIUMINT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id)
);
LOAD DATA LOCAL INFILE 'names.txt' INTO TABLE names COLUMNS TERMINATED BY ' ';
DELETE FROM names WHERE id > 300;