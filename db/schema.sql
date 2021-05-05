DROP DATABASE if exists wdkvljkwji8f7wh3;
CREATE DATABASE wdkvljkwji8f7wh3;
USE wdkvljkwji8f7wh3;

CREATE TABLE burgers (
	id INTEGER(11) NOT NULL AUTO_INCREMENT,
    CONSTRAINT CHK_burger CHECK (burger_name <> ""),
	burger_name VARCHAR(40) NOT NULL UNIQUE,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY(id)
);
