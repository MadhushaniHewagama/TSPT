import { Application, Request, Response } from "express";
import Mysql from "../config/db";
import { FieldInfo, MysqlError } from "mysql";

export const getTickets = (req: Request, res: Response) => {
    Mysql.getPool().query(
      "select tiket_id ,bus_id,start_loc,violation,end_loc,fare,DATE_FORMAT(issued_time, '%Y/%m/%d %h:%m') as issued_time from `tiket`;",
      (err: MysqlError, results: any) => {
        if (err) {
          res.status(500).json({ error: err });
        } else {
          res.json(results);
        }
      }
    );
  };
  