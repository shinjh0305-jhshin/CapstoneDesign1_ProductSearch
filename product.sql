DROP DATABASE IF EXISTS products;
CREATE DATABASE products;
CREATE USER IF NOT EXISTS 'gongu'@'localhost' IDENTIFIED BY 'asdf1234';
GRANT ALL PRIVILEGES ON products.* TO 'gongu'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

USE chatUser;
CREATE TABLE user (
	ID		VARCHAR(20) 	NOT NULL	PRIMARY KEY,
    PWD		VARCHAR(20)		NOT NULL,
    NICK	VARCHAR(20)		NOT NULL,
    UNIQUE (ID)
);

INSERT INTO user VALUES('admin', 'asdf1234', 'admin');
INSERT INTO user VALUES('john', 'asdf1234', 'john');
INSERT INTO user VALUES('jake', 'asdf1234', 'jake');
INSERT INTO user VALUES('shin', 'asdf1234', 'shin');
INSERT INTO user VALUES('park', 'asdf1234', 'park');

USE products;
CREATE TABLE product (
	ID		VARCHAR(20) 	NOT NULL	PRIMARY KEY,
    PWD		VARCHAR(20)		NOT NULL,
    NICK	VARCHAR(20)		NOT NULL,
);

INSERT INTO user VALUES('admin', 'asdf1234', 'admin');
INSERT INTO user VALUES('john', 'asdf1234', 'john');
INSERT INTO user VALUES('jake', 'asdf1234', 'jake');
INSERT INTO user VALUES('shin', 'asdf1234', 'shin');
INSERT INTO user VALUES('park', 'asdf1234', 'park');


