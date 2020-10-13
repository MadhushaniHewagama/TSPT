import { Application, Request, Response } from "express";
import Mysql from "../config/db";
import { FieldInfo, MysqlError } from "mysql";
import { request } from "https";

var moment = require("moment");

export const getLogin = (req: Request, res: Response) => {
  console.log(req.params.user_name);
  console.log()
  Mysql.getPool().query(
    "SELECT * FROM login_data where `login_data`.`user_name` = '" +
  req.params.user_name +
  "';",
    (err: MysqlError, results: any) => {
        if (err) {
          console.log(JSON.stringify(err))
            res.json({ error: err });
          } else {
            console.log(JSON.stringify(results))
            res.json(results);
          }
    }
  );
};

