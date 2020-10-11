DROP DATABASE tspt_db;
CREATE DATABASE tspt_db;
USE tspt_db;
CREATE TABLE login_data (
  user_name VARCHAR(150),
  password VARCHAR(150),
  privilege INT  DEFAULT 0,
  PRIMARY KEY (user_name)
);

CREATE TABLE user_profile (
  user_name VARCHAR(150),
  nic VARCHAR(150)NOT NULL,
  phone_number VARCHAR(12)NOT NULL,
  email VARCHAR(150)NOT NULL,  
  credit DOUBLE  DEFAULT 0, 
  PRIMARY KEY (user_name)
);

CREATE TABLE tiket (
  tiket_id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(150),
  time_stamp_start  	datetime,
  time_stamp_end	  datetime,
  location VARCHAR(150),
  violation  boolean  DEFAULT 0 NOT NULL,
  PRIMARY KEY (tiket_id)
);


CREATE TABLE bus(
  bus_id INT NOT NULL AUTO_INCREMENT,
  location VARCHAR(150),
  inspector VARCHAR(15),
  available  boolean  DEFAULT 1 NOT NULL,
  PRIMARY KEY (bus_id)
);

