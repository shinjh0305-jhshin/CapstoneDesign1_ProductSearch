DROP DATABASE IF EXISTS frontdb;
CREATE DATABASE frontdb;
CREATE USER IF NOT EXISTS 'gongu'@'localhost' IDENTIFIED BY 'asdf1234';
GRANT ALL PRIVILEGES ON frontdb.* TO 'gongu'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;

USE frontdb;
CREATE TABLE `frontdb`.`product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `goal` INT NOT NULL,
  'ordered' INT NOT NULL,
  `people` INT NOT NULL DEFAULT 1,
  `price` INT NOT NULL DEFAULT 0,
  `url` VARCHAR(200) NOT NULL,
  `portion` INT NOT NULL,
  `unit` VARCHAR(45) NOT NULL,
  `category` INT NOT NULL,
  `tags` VARCHAR(100) NULL,
  `ends` DATE NOT NULL,
  `createdat` DATETIME NOT NULL DEFAULT current_timestamp,
  `createdby` VARCHAR(100) NOT NULL,
  `deleted` BOOLEAN NOT NULL DEFAULT 0 COMMENT '0-false 1-true'
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `IDX_SELLER` (`createdby` ASC, `createdat` ASC) INVISIBLE)
COMMENT = '	';

CREATE TABLE `frontdb`.`image` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `type` INT NOT NULL DEFAULT 1 COMMENT '1-thumbnail\n2-제품 이미지',
  `path` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `IDX_SEARCH` (`product_id` ASC, `type` ASC) VISIBLE);

CREATE TABLE `frontdb`.`contents` (
`id` INT NOT NULL AUTO_INCREMENT,
`product_id` INT NOT NULL,
`content` TEXT NOT NULL,
PRIMARY KEY (`id`),
UNIQUE INDEX `product_id_UNIQUE` (`product_id` ASC) VISIBLE);