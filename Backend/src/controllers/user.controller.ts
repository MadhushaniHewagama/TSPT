import { Application, Request, Response } from "express";
import Mysql from "../config/db";
import { FieldInfo, MysqlError } from "mysql";

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
    "update user_profile set credit= " +
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
    "select * from `tiket` WHERE `user_name` = " +`("${ req.params.user_name}")`,
    (err: MysqlError, results: any) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.json(results);
      }
    }
  );
};
