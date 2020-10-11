import { Application, Request, Response } from "express";
import Mysql from "../config/db";
import { FieldInfo, MysqlError } from "mysql";
import { request } from "https";

var moment = require("moment");

export const getLogin = (req: Request, res: Response) => {
  Mysql.getPool().query(
    "SELECT * FROM login_data where `login_data`.`user_name` = '" +
      req.params.user_name +
      "';",
    (err: MysqlError, results: any) => {
        if (err) {
            res.status(500).json({ error: err });
          } else {
            res.json(results);
          }
    }
  );
};
