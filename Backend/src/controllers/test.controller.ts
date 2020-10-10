import { Application, Request, Response } from "express";
import Mysql from "../config/db";
import { FieldInfo, MysqlError } from "mysql";

export const getTest = (req: Request, res: Response) => {
  Mysql.getPool().query(
    "select * from `test`;",
    (err: MysqlError, results: any) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.json(results);
      }
    }
  );
};
