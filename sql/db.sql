CREATE DATABASE node;

/* create user table */

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR (300),
	email VARCHAR (400),
	password VARCHAR (500),
	primary key(id)
);

/* create posts table */

CREATE TABLE poste (
	id INT NOT NULL AUTO_INCREMENT,
	username VARCHAR (200),
	userid VARCHAR (10),
	title VARCHAR (300),
	content VARCHAR (500),
	primary key(id)
);

