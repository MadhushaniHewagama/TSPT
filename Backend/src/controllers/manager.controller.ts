import { Application, Request, Response } from "express";
import Mysql from "../config/db";
import { FieldInfo, MysqlError } from "mysql";

export const getUsers = (req: Request, res: Response) => {
    Mysql.getPool().query(
      "select * from `user_profile`;",
      (err: MysqlError, results: any) => {
        if (err) {
          res.status(500).json({ error: err });
        } else {
          res.json(results);
        }
      }
    );
  };
  
  export const getUser = (req: Request, res: Response) => {
    Mysql.getPool().query(
      "SELECT u.user_name,nic,CAST(MAX(issued_time ) as DATE) as last_date,CAST(MAX(issued_time ) as TIME) as last_time FROM user_profile u left outer join tiket t on u.user_name=t.user_name where u.`user_name`="+`"${req.params.user_name}"`,
      (err: MysqlError, results: any) => {
        if (err) {
          res.status(500).json({ error: err });
        } else {
          res.json(results);
        }
      }
    );
  };
  