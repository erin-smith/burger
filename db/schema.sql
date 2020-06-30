### Schema

CREATE DATABASE wdkvljkwji8f7wh3;
USE wdkvljkwji8f7wh3;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(40) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
