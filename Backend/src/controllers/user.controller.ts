import { Application, Request, Response } from "express";
import Mysql from "../config/db";
import { FieldInfo, MysqlError } from "mysql";
var moment = require("moment");

//add user to user_profile table
export const addUser = (req: Request, res: Response) => {

  const user = req.params;
  const user_name = user.user_name;
  const nic = user.nic;
  const phone_number = user.phone_number;
  const email = user.email;
  const password=user.password;
  const addUserQuery =
    "insert into user_profile(user_name,nic,phone_number,email) values " +
    `("${user_name}","${nic}","${phone_number}","${email}")`;
  Mysql.getPool().query(addUserQuery, 
    (err: MysqlError, results: any) => {
    if (err) {
      // console.log("Error", err);
      res.status(500).json({ error: err });
    } 
    else {
      Mysql.getPool().query(
        "insert into login_data(user_name,password) values "+ `("${user_name}","${password}")`,
        (err: MysqlError, res2: any) => {
          if (err) { res.json({ error: err }); }
          else { res.json({ res:res2 }); }
        }
      );
    }


 
  }
  );
};

export const getUser = (req: Request, res: Response) => {
  Mysql.getPool().query(
    "select * from `user_profile` WHERE `user_name` = " +`("${ req.params.user_name}")`,
    (err: MysqlError, results: any) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.json(results);
      }
    }
  );
};


export const addCredit = (req: Request, res: Response) => {

  const user = req.params;
  const user_name = user.user_name;
  const credit=user.credit;
  const addUserQuery =
    "update user_profile set credit=credit+ " +
    `${credit}`+" where user_name = "+`"${user_name}"`;
  Mysql.getPool().query(addUserQuery, 
    (err: MysqlError, results: any) => {
    if (err) {
      console.log("Error", err);
      res.status(500).json({ error: err });
    } else {
      res.json(results);
    }
  }
  );
};


export const getTrips = (req: Request, res: Response) => {
  Mysql.getPool().query(
    "select tiket_id ,bus_id,start_loc,end_loc,fare,DATE_FORMAT(issued_time, '%Y/%m/%d %h:%m') as issued_time from `tiket` WHERE `user_name` = " +`("${ req.params.user_name}") order by issued_time `,
    (err: MysqlError, results: any) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.json(results);
      }
    }
  );
};



//add user to user_profile table
export const createQR = (req: Request, res: Response) => {

  const qr = req.params;
  const start_loc = qr.start_loc;
  const end_loc = qr.end_loc;
  const fare = qr.fare;
  const bus_id = qr.bus_id;
  const user_name=qr.user_name;
  const violation=qr.violation;
  const issued_time=moment().format("YYYY-MM-DD HH:mm:ss");
  const addUserQuery =
    "insert into tiket(bus_id,issued_time,user_name,start_loc,end_loc,fare,violation) values " +
    `("${bus_id}","${issued_time}","${user_name}","${start_loc}","${end_loc}","${fare}","${violation}")`;
  Mysql.getPool().query(addUserQuery, 
    (err: MysqlError, results: any) => {
    if (err) {
      // console.log("Error", err);
      res.status(500).json({ error: err });
    } 
    else {
      Mysql.getPool().query(
        "select Max(tiket_id) as tiket_id from tiket;",
        (err: MysqlError, res2: any) => {
          if (err) { res.json({ error: err }); }
          else { res.json({ res:res2 }); }
        }
      );
    }


 
  }
  );
};


export const getCredit = (req: Request, res: Response) => {
  Mysql.getPool().query(
    "select credit from `user_profile` WHERE `user_name` = " +`("${ req.params.user_name}")`,
    (err: MysqlError, results: any) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.json(results);
      }
    }
  );
};


export const endTrip = (req: Request, res: Response) => {

  const user = req.params;
  const tiket_id = user.tiket_id;
 
  const addUserQuery =
    "update tiket set status=1 where tiket_id = "+`"${tiket_id}"`;
  Mysql.getPool().query(addUserQuery, 
    (err: MysqlError, results: any) => {
    if (err) {
      console.log("Error", err);
      res.status(500).json({ error: err });
    } else {
      res.json(results);
    }
  }
  );
};