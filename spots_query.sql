DROP SCHEMA IF EXISTS `EatingSPots`;
CREATE SCHEMA `EatingSpots`;

USE `EatingSpots`;

SET NAMES utf8;
SET character_set_client = utf8mb4;


CREATE TABLE sign_up( 
email VARCHAR(50) NOT NULL, 
username VARCHAR(24) NOT NULL, 
password VARCHAR(100) NOT NULL 
);

CREATE TABLE spot_rating( 
id INT,  
spot_name VARCHAR(50), 
rating INT
-- connect to reviews
);

CREATE TABLE reviews( 
id INT,
dining_review VARCHAR(500)
);


-- table inserts


INSERT INTO spot_rating (id,spot_name,rating) VALUES 
(0,'brockway',2),
(0,'brockway',3),
(0,'brockway',1),
(0,'brockway',2),
(0,'brockway',3);

INSERT INTO spot_rating (id,spot_name,rating) VALUES 
(1,'ernie_davis',3),
(1,'ernie_davis',4),
(1,'ernie_davis',3),
(1,'ernie_davis',4),
(1,'ernie_davis',2);


INSERT INTO spot_rating (id,spot_name,rating) VALUES
(2,'graham',4),
(2,'graham',4),
(2,'graham',5),
(2,'graham',4);


INSERT INTO spot_rating (id,spot_name,rating) VALUES 
(3,'orange',3),
(3,'orange',2),
(3,'orange',3),
(3,'orange',2),
(3,'orange',4);



INSERT INTO spot_rating (id,spot_name,rating) VALUES 
(4,'sadler',1),
(4,'sadler',2),
(4,'sadler',1),
(4,'sadler',2),
(4,'sadler',1);



INSERT INTO spot_rating (id,spot_name,rating) VALUES 
(5,'shaw',2),
(5,'shaw',3),
(5,'shaw',2),
(5,'shaw',1),
(5,'shaw',3);


