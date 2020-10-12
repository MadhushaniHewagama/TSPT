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
  bus_id INT,
  issued_time datetime,
  user_name VARCHAR(150),
  start_loc  	VARCHAR(150),
  end_loc	  VARCHAR(150),
  fare DOUBLE,
  violation  boolean  DEFAULT 0 NOT NULL,
  PRIMARY KEY (tiket_id)
);

CREATE TABLE bus(
  bus_id INT NOT NULL AUTO_INCREMENT,
  route_id INT,
  inspector VARCHAR(15),
  available  boolean  DEFAULT 1 NOT NULL,
  PRIMARY KEY (bus_id)
);

CREATE TABLE bus_route(
  route_id INT NOT NULL AUTO_INCREMENT,
  start_loc  	VARCHAR(150),
  end_loc	  VARCHAR(150),
  s_time time,
  e_time time,
  cost_per_unit DOUBLE,
  PRIMARY KEY (route_id)
);

insert into user_profile values ("user1","196765435V","0700090809","user1@gmail.com",0);
insert into login_data values ("user1","user1",0);
insert into user_profile values ("user2","196765435V","0700090809","user2@gmail.com",0);
insert into login_data values ("user2","user2",0);
insert into user_profile values ("user3","196765435V","0700090809","user3@gmail.com",0);
insert into login_data values ("user3","user3",0);
insert into user_profile values ("user4","196765435V","0700090809","user4@gmail.com",0);
insert into login_data values ("user4","user4",0);
insert into user_profile values ("user5","196765435V","0700090809","user5@gmail.com",0);
insert into login_data values ("user5","user5",0);
insert into login_data values ("manager1",'manager1',2);
insert into login_data values ("manager2",'manager2',2);
insert into login_data values ("inspector1",'inspector1',1);
insert into login_data values ("inspector2",'inspector2',1);
insert into login_data values ("inspector3",'inspector3',1);
insert into login_data values ("inspector4",'inspector4',1);
insert into login_data values ("inspector5",'inspector5',1);

insert into bus_route values (1,'s_loc1','e_loc1','08:00:00','10:00:00',10.5);
insert into bus_route values (2,'s_loc2','e_loc2','11:00:00','12:30:00',20.5);
insert into bus_route values (3,'s_loc3','e_loc3','13:00:00','13:30:00',30.5);
insert into bus_route values (4,'s_loc4','e_loc4','14:00:00','16:25:00',40.5);
insert into bus_route values (5,'s_loc5','e_loc5','20:20:00','21:00:00',50.5);

insert into bus values (1,1,1,1);
insert into bus values (2,2,2,1);
insert into bus values (3,3,3,1);
insert into bus values (4,4,4,1);
insert into bus values (5,5,5,1);

insert into tiket values (1,1,'2020-10-01 08:30:00','user1','u_s_loc1','u_e_loc1',20,0);
insert into tiket values (2,2,'2020-10-02 11:00:00','user1','u_s_loc2','u_e_loc2',30,0);
insert into tiket values (3,3,'2020-10-03 13:15:00','user1','u_s_loc3','u_e_loc3',40,0);
insert into tiket values (4,4,'2020-10-04 14:10:00','user1','u_s_loc4','u_e_loc4',50,0);
insert into tiket values (5,5,'2020-10-05 21:00:00','user1','u_s_loc5','u_e_loc5',60,0);

insert into tiket values (6,1,'2020-10-01 08:30:00','user2','u_s_loc1','u_e_loc1',20,0);
insert into tiket values (7,2,'2020-10-02 11:00:00','user2','u_s_loc2','u_e_loc2',30,0);
insert into tiket values (8,3,'2020-10-03 13:15:00','user2','u_s_loc3','u_e_loc3',40,0);
insert into tiket values (9,4,'2020-10-05 21:00:00','user2','u_s_loc4','u_e_loc4',50,0);

insert into tiket values (10,1,'2020-10-01 08:30:00','user3','u_s_loc1','u_e_loc1',20,0);
insert into tiket values (11,2,'2020-10-02 11:00:00','user3','u_s_loc2','u_e_loc2',30,0);
insert into tiket values (12,3,'2020-10-03 13:15:00','user3','u_s_loc3','u_e_loc3',40,0);

insert into tiket values (13,1,'2020-10-01 08:30:00','user4','u_s_loc1','u_e_loc1',20,0);
insert into tiket values (14,2,'2020-10-02 11:00:00','user4','u_s_loc2','u_e_loc2',30,0);

insert into tiket values (15,2,'2020-10-01 08:30:00','user5','u_s_loc1','u_e_loc1',20,0);


