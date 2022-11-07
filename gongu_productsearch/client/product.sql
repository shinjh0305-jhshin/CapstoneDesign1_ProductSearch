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

INSERT INTO user VALUES('admin@sogang.ac.kr', 'asdf1234', 'admin');
INSERT INTO user VALUES('john@sogang.ac.kr', 'asdf1234', 'john');
INSERT INTO user VALUES('jake@sogang.ac.kr', 'asdf1234', 'jake');
INSERT INTO user VALUES('shin@sogang.ac.kr', 'asdf1234', 'shin');
INSERT INTO user VALUES('park@sogang.ac.kr', 'asdf1234', 'park');

CREATE TABLE `chatuser`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `total` INT NOT NULL,
  `people` INT NOT NULL DEFAULT 0,
  `price` INT NOT NULL DEFAULT 0,
  `portion` INT NOT NULL,
  `unit` VARCHAR(45) NOT NULL,
  `source` VARCHAR(10) NOT NULL,
  `category` VARCHAR(100) NOT NULL,
  `tags` VARCHAR(100) NULL,
  `ends` DATE NOT NULL,
  `createdat` DATETIME NOT NULL DEFAULT current_timestamp,
  `createdby` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `IDX_SELLER` (`createdby` ASC, `createdat` ASC) INVISIBLE)
COMMENT = '	';


CREATE TABLE `chatuser`.`images` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `type` INT NOT NULL DEFAULT 1 COMMENT '1-thumbnail\n2-제품 이미지',
  `path` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `IDX_SEARCH` (`product_id` ASC, `type` ASC) VISIBLE);