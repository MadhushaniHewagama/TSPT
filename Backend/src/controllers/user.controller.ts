import { Application, Request, Response } from "express";
import Mysql from "../config/db";
import { FieldInfo, MysqlError } from "mysql";

//add user to user_profile table
export const addUser = (req: Request, res: Response) => {
  const user = req.body;
  const user_name = user.user_name;
  const nic = user.nic;
  const phone_number = user.phone_number;
  const email = user.email;
  const password=user.password;
  const addUserQuery =
    "insert into user_profile(user_name,nic,phone_number,email) values " +
    `("${user_name}","${nic}","${phone_number}","${email}")`;
  Mysql.getPool().query(addUserQuery, (err: MysqlError, results: any) => {
    if (err) {
      // console.log("Error", err);
      res.status(500).json({ error: err });
    } else {
      // console.log("Result: ", results);
      const login = "insert into login_data(user_name,password) values "+ `("${user_name}","${password}"")`;
      Mysql.getPool().query(
       login,
        (err: MysqlError, results: any) => {
          if (err) {
            res.status(500).json({ error: err });
          } else {
            res.json(results);
          }
        }
      );
      res.json(results);
    }
  });
};