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

  
  export const getOverview = (req: Request, res: Response) => {
    const data={users:0,buses:0,inspectors:0,ticket_violations:0,amount:0}
    Mysql.getPool().query(
      "SELECT Count(*) as users from user_profile;",
      (err: MysqlError, results: any) => {
        if (err) {
          res.status(500).json({ error: err });
        } else {
          data.users=results[0].users;
          Mysql.getPool().query(
            "SELECT Count(*) as buses from bus where available=1;",
            (err: MysqlError, result2: any) => {
              if (err) {
                console.log(err);
                res.status(500).json({ error: err });
              } else {
                data.buses=result2[0].buses;
                Mysql.getPool().query(
                  "SELECT Count(*) as inspectors from login_data where privilege=1;",
                  (err: MysqlError, result3: any) => {
                    if (err) {
                      console.log(err);
                      res.status(500).json({ error: err });
                    } else {
                      data.inspectors=result3[0].inspectors;
                      Mysql.getPool().query(
                        "SELECT Count(*) as ticket_violations from tiket where violation=1;",
                        (err: MysqlError, result4: any) => {
                          if (err) {
                            console.log(err);
                            res.status(500).json({ error: err });
                          } else {
                            data.ticket_violations=result4[0].ticket_violations;
                            Mysql.getPool().query(
                              "SELECT sum(fare) as amount from tiket where violation=0;",
                              (err: MysqlError, result5: any) => {
                                if (err) {
                                  console.log(err);
                                  res.status(500).json({ error: err });
                                } else {
                                  data.amount=result5[0].amount;
                                  console.log(data)
                                  res.json(data);
                                  
                                }
                              }
                            );
                          }
                        }
                      );
                    }
                  }
                );
              }
            }
          );
        }
      }
    );
  };

  export const getInspectors = (req: Request, res: Response) => {
    Mysql.getPool().query(
      "select user_name from `login_data` where privilege = 1;",
      (err: MysqlError, results: any) => {
        if (err) {
          res.status(500).json({ error: err });
        } else {
          res.json(results);
        }
      }
    );
  };

  export const getTickets = (req: Request, res: Response) => {
    Mysql.getPool().query(
      "select * from `tiket`;",
      (err: MysqlError, results: any) => {
        if (err) {
          res.status(500).json({ error: err });
        } else {
          res.json(results);
        }
      }
    );
  };
  