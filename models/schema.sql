### Schema
DROP DATABASE IF EXISTS database_development;

CREATE DATABASE users_db;

USE users_db;

CREATE TABLE todays
(
	id int NOT NULL AUTO_INCREMENT,
	todo varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

SELECT * FROM todays; 

CREATE TABLE weeks
(
	id int NOT NULL AUTO_INCREMENT,
	todo varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

SELECT * FROM weeks; 

CREATE TABLE months
(
	id int NOT NULL AUTO_INCREMENT,
	todo varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE journals
(
	id int NOT NULL AUTO_INCREMENT,
	title varchar(255) NOT NULL,
	body text,
	PRIMARY KEY (id)
);