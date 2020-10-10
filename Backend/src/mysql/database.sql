DROP DATABASE tydb;
CREATE DATABASE tydb;
USE tydb;
CREATE TABLE group_list (
  group_id INT NOT NULL AUTO_INCREMENT,
  group_name VARCHAR(40) NOT NULL,
  distribution_list_id VARCHAR(50) NOT NULL,
  status boolean  DEFAULT 1 NOT NULL,
  PRIMARY KEY (group_id)
);
ALTER TABLE group_list AUTO_INCREMENT=80000 ;

CREATE TABLE user_profile (
  sso_id INT NOT NULL,
  email VARCHAR(50)NOT NULL,
  first_name VARCHAR(40)NOT NULL,
  last_name VARCHAR(50)NOT NULL,
  privilege boolean  DEFAULT 0 NOT NULL,
  status boolean  DEFAULT 1 NOT NULL,
  profile_img TEXT,
  PRIMARY KEY (sso_id),
  UNIQUE (email)
);

CREATE TABLE login_status (
  login_id INT NOT NULL AUTO_INCREMENT,
  sso_id INT,
  device_id VARCHAR(50),
  login_status ENUM("LoggedIn","LoggedOut"),
  otp INT,
  time_stamp	datetime,
  attempt	int(1)	DEFAULT 0,
  PRIMARY KEY (login_id),
  FOREIGN KEY (sso_id) REFERENCES user_profile(sso_id)
); 
ALTER TABLE login_status AUTO_INCREMENT=10000000; 

CREATE TABLE thankyou_message (   
message_id INT NOT NULL AUTO_INCREMENT,   
sender INT NOT NULL,   
thankyou_text VARCHAR(500) NOT NULL,   
date_time DATETIME NOT NULL,   
recipient INT NOT NULL,   
recipient_type ENUM('Person','Group') NOT NULL,   
emoji_id INT NOT NULL,   
PRIMARY KEY (message_id),   
FOREIGN KEY (sender) REFERENCES user_profile(sso_id));
ALTER TABLE thankyou_message AUTO_INCREMENT=30000000 ;

CREATE TABLE acknowledgement_message (   
ackm_id INT NOT NULL AUTO_INCREMENT,   
reffer_mid INT NOT NULL,   
acknowledgement_text VARCHAR(500) NOT NULL,   
date_time DATETIME NOT NULL,   
PRIMARY KEY (ackm_id),   
FOREIGN KEY (reffer_mid) REFERENCES thankyou_message(message_id));
ALTER TABLE acknowledgement_message AUTO_INCREMENT=60000000 ;

ALTER TABLE group_list ALTER status SET DEFAULT '1';
ALTER TABLE user_profile ALTER status SET DEFAULT '1';
ALTER TABLE user_profile ALTER privilege SET DEFAULT '0';
ALTER TABLE login_status ALTER attempt SET DEFAULT '0';

ALTER TABLE thankyou_message add COLUMN read_msg boolean DEFAULT false;
ALTER TABLE acknowledgement_message add COLUMN read_msg boolean DEFAULT false;