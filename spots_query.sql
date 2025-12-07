DROP SCHEMA IF EXISTS `EatingSPots`;
CREATE SCHEMA `EatingSpots`;

USE `EatingSpots`;

SET NAMES utf8;
SET character_set_client = utf8mb4;


CREATE TABLE sign_up( 
email VARCHAR(50) NOT NULL, 
username VARCHAR(24) NOT NULL, 
password VARCHAR(24) NOT NULL 
);


CREATE TABLE spot_rating( 
id INT,  
spot_name VARCHAR(50), 
rating INT,
);

CREATE TABLE reviews(
favorite_dinning VARCHAR(50),
favorite_study VARCHAR(50)
);