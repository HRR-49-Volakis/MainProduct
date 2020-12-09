DROP DATABASE IF EXISTS ikea;

CREATE DATABASE ikea;

\c ikea;

DROP INDEX IF EXISTS username_indx;
DROP INDEX IF EXISTS password_indx;
DROP INDEX IF EXISTS prdname_index;
DROP TABLE IF EXISTS product CASCADE;
DROP TABLE IF EXISTS image CASCADE;
DROP TABLE IF EXISTS material CASCADE;
DROP TABLE IF EXISTS package CASCADE;
DROP TABLE IF EXISTS detail CASCADE;
DROP TABLE IF EXISTS member CASCADE;

CREATE TABLE product (
	id INT UNIQUE PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	name VARCHAR(100) NOT NULL,
	material_ids INT[] NOT NULL,
	image_ids INT[] NOT NULL,
	detail_id INT NOT NULL REFERENCES detail (id),
	package_id INT NOT NULL REFERENCES package (id)
);

CREATE TABLE image (
  id INT UNIQUE NOT NULL GENERATED ALWAYS AS IDENTITY,
  url VARCHAR (200) NOT NULL
);

CREATE TABLE material (
	id INT UNIQUE NOT NULL GENERATED ALWAYS AS IDENTITY,
	name VARCHAR (100) NOT NULL,
	description TEXT NOT NULL
);

CREATE TABLE package (
  id INT UNIQUE NOT NULL GENERATED ALWAYS AS IDENTITY,
  name VARCHAR (100) NOT NULL,
  description TEXT NOT NULL,
  dimensions VARCHAR (50) NOT NULL,
  weight VARCHAR (10) NOT NULL
);

CREATE TABLE detail (
	id INT UNIQUE NOT NULL GENERATED ALWAYS AS IDENTITY,
	designer VARCHAR (50) NOT NULL,
	care VARCHAR (200) NOT NULL
);

CREATE TABLE member (
	id INT NOT NULL GENERATED ALWAYS AS IDENTITY,
	name VARCHAR (100) NOT NULL,
	last VARCHAR (100) NOT NULL,
	username VARCHAR (100) NOT NULL,
	password VARCHAR (100) NOT NULL,
	sex CHAR (1) NOT NULL,
	email VARCHAR (100) NOT NULL,
	city VARCHAR (100) NOT NULL,
	state VARCHAR (100) NOT NULL,
	zip CHAR (12) NOT NULL,
	created_at DATE NOT NULL,
	updated_at DATE NULL
);


CREATE INDEX username_indx ON member ((lower(username)));
CREATE INDEX password_indx ON member ((lower(password)));
CREATE INDEX prdname_index ON product ((lower(name)));