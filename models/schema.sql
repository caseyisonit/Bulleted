### Schema
DROP DATABASE IF EXISTS today_db;

CREATE DATABASE today_db;

USE today_db;

CREATE TABLE todays
(
	id int NOT NULL AUTO_INCREMENT,
	todo varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

SELECT * FROM todays; 

DROP DATABASE IF EXISTS week_db;

CREATE DATABASE week_db;

USE week_db;

CREATE TABLE weeks
(
	id int NOT NULL AUTO_INCREMENT,
	todo varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

SELECT * FROM weeks; 

DROP DATABASE IF EXISTS month_db;

CREATE DATABASE month_db;

USE month_db;

CREATE TABLE months
(
	id int NOT NULL AUTO_INCREMENT,
	todo varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

DROP DATABASE IF EXISTS journal_db;

CREATE DATABASE journal_db;

USE journal_db;

CREATE TABLE journals
(
	id int NOT NULL AUTO_INCREMENT,
	title varchar(255) NOT NULL,
	body text,
	PRIMARY KEY (id)
);





