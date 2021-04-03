/* Activer le chargement d'un fichier externe pour en extraire les données */
SET GLOBAL local_infile = true;
CREATE DATABASE the_name_game;
USE the_name_game;
/* Création de la table avec une colomne pour les noms et une autre pour les identifiants. Ces derniers doivent être créés en deuxième, sinon les prénoms chargés depuis le fichier sont écrasés. */
CREATE TABLE names (
    name CHAR(15) NOT NULL,
    id MEDIUMINT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id)
);
/* Chargement des données depuis le fichier. Les champs sont délimités par des espaces ; ici, seul le premier champ est chargé, c'est-à-dire les prénoms */
LOAD DATA LOCAL INFILE 'names.txt' INTO TABLE names COLUMNS TERMINATED BY ' ';
/* Seuls les 300 premiers noms de la liste doivent être importés, les autres sont supprimés */
DELETE FROM names WHERE id > 300;