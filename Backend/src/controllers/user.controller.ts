// import { Application, Request, Response } from "express";
// import Mysql from "../config/db";
// import { FieldInfo, MysqlError } from "mysql";

// var moment = require("moment");
// /**
//  * @license Copyright (c) 2019 Wabtec Corporation. All rights reserved. The
//  *          software may be used and/or copied only with the written permission
//  *          of Wabtec Corporation or in accordance with the terms and conditions
//  *          stipulated in the agreement/contract under which the software has
//  *          been supplied.
//  *
//  * @author Ajantha Bandara on 8/24/19.
//  */

// //var sortJsonArray = require('sort-json-array');

// export const getUsers = (req: Request, res: Response) => {
//   Mysql.getPool().query(
//     "select * from `user_profile`  ORDER BY CONCAT (first_name, ' ', last_name);",
//     (err: MysqlError, results: any) => {
//       if (err) {
//         res.status(500).json({ error: err });
//       } else {
//         res.json(results);
//       }
//     }
//   );
// };

// export const getUser = (req: Request, res: Response) => {
//   Mysql.getPool().query(
//     "select * from `user_profile` WHERE `sso_id` = " + req.params.sso_id,
//     (err: MysqlError, results: any) => {
//       if (err) {
//         res.status(500).json({ error: err });
//       } else {
//         res.json(results);
//       }
//     }
//   );
// };

// export const getProfile = (req: Request, res: Response) => {
//   Mysql.getPool().query(
//     "Select * FROM `user_profile` WHERE `sso_id` = '" +
//     req.params.sso_id +
//     "';",
//     (err: MysqlError, results: any) => {
//       if (err) {
//         res.json({ error1: err });
//       } else {
//         res.json(results);
//       }
//     }
//   );
// };

// export const updateProfile = (req: Request, res: Response) => {
//   Mysql.getPool().query(
//     "UPDATE `user_profile` SET `profile_img` = '" +
//     req.body.Img +
//     "' WHERE `sso_id` = '" +
//     req.params.sso_id +
//     "';",
//     (err: MysqlError, results: any) => {
//       if (err) {
//         res.json({ error1: err });
//       } else {
//         res.json(results);
//       }
//     });
// };
// //get all inbox messages  from acknowledgement_message table
// export const getInbox = (req: Request, res: Response) => {
//   const get_inbox_query =
//     "select CONCAT ( t3.first_name, ' ' , t3.last_name ) as reciver, t3.profile_img,t1.thankyou_text, t1.read_msg ,t1.message_id ,t1.emoji_id,t1.recipient_type,t2.acknowledgement_text,t1.date_time as thankyou_time,t2.date_time as acknoledgement_time,NOW() as now from thankyou_message t1 left outer join acknowledgement_message t2 on t1.message_id = t2.reffer_mid left outer join user_profile t3 on t1.sender=t3.sso_id where recipient='"+req.params.sso_id+"'ORDER BY CASE WHEN acknoledgement_time is null THEN thankyou_time ELSE acknoledgement_time END DESC";
//   Mysql.getPool().query(get_inbox_query, (err: MysqlError, results: any) => {
//     if (err) {
//       res.status(500).json({ error: err });
//     } else {
//      // console.log("Result: ", results);
//       res.json(results);
//     }
//   });
// };

// //get all sent messages from thankyou_message table
// export const getSent = (req: Request, res: Response) => {
//   const get_group_sent_query = "( select CONCAT ( t3.first_name, ' ' , t3.last_name ) as reciver,t3.profile_img, t1.thankyou_text, t1.message_id , t1.emoji_id, t2.acknowledgement_text, t2.read_msg, t1.date_time as thankyou_time, t2.date_time as acknoledgement_time, t1.recipient_type,NOW() as now from thankyou_message t1 left outer join acknowledgement_message t2 on t1.message_id = t2.reffer_mid left outer join user_profile t3 on t1.recipient=t3.sso_id  where recipient_type='Person' and sender='"+req.params.sso_id+"') union (select t2.group_name as reciver, null as profile_img ,t1.thankyou_text, t1.message_id,t1.emoji_id, null as acknowledgement_text,null as read_msg , t1.date_time as thankyou_time,  null as acknoledgement_time, t1.recipient_type,NOW() as now from (thankyou_message t1 left outer join group_list t2 on t2.group_id = t1.recipient) where recipient_type='Group' and sender='"+req.params.sso_id+"') ORDER BY CASE WHEN acknoledgement_time is null THEN thankyou_time ELSE acknoledgement_time END DESC" ;
//   Mysql.getPool().query(get_group_sent_query, (err: MysqlError, results: any) => {
//     if (err) {
//       res.status(500).json({ error: err });
//      // console.log("error"+err)
//     } else {
//       //console.log("Result: ", results);
//       res.json(results);
//     }
//   });
// }

// export const deleteProfile = (req: Request, res: Response) => {
//   Mysql.getPool().query(
//     "UPDATE `user_profile` SET `profile_img` = NULL WHERE `sso_id` = '" +
//     req.params.sso_id +
//     "';",
//     (err: MysqlError, results: any) => {
//       if (err) {
//         res.json({ error1: err });
//       } else {
//         res.json(results);
//       }
//     }
//   );
// };

// export const getInboxCount = (req: Request, res: Response) => {
//   Mysql.getPool().query(
//     "select count(*) as count from thankyou_message where recipient=" +
//     req.params.sso_id +
//     " and read_msg=false;",
//     (err: MysqlError, results: any) => {
//       if (err) {
//         res.status(500).json({ error: err });
//       } else {
//         res.json(results);
//       }
//     }
//   );
// };

// export const getSentCount = (req: Request, res: Response) => {
//   Mysql.getPool().query(
//     "select count(*) as count from thankyou_message t1 left outer join acknowledgement_message t2 on t1.message_id=t2.reffer_mid where t1.sender=" +
//     req.params.sso_id +
//     " and t2.read_msg=false;",
//     (err: MysqlError, results: any) => {
//       if (err) {
//         res.status(500).json({ error: err });
//       } else {
//         res.json(results);
//       }
//     }
//   );

// };

// export const setReadThankYouMsg = (req: Request, res: Response) => {
//   const message_id=req.body.message_id;
//   Mysql.getPool().query(
//     "update thankyou_message set read_msg=true where message_id= " +
//     `"${message_id}"` +
//     ";",
//     (err: MysqlError, results: any) => {
//       if (err) {
//         res.status(500).json({ error: err });
//       } else {
//         res.json(results);
//       }
//     }
//   );
// };
// export const setReadAcknowledgmentMsg = (req: Request, res: Response) => {
//   const reffer_mid=req.body.reffer_mid;
//   Mysql.getPool().query(
//     "update acknowledgement_message set read_msg=true where reffer_mid= " +
//     `"${reffer_mid}"` +
//     ";",
//     (err: MysqlError, results: any) => {
//       if (err) {
//         res.status(500).json({ error: err });
//       } else {
//         res.json(results);
//       }
//     }
//   );
// };