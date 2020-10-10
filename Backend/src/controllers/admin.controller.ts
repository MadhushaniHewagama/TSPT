// import { Application, Request, Response } from "express";
// import Mysql from "../config/db";
// import { FieldInfo, MysqlError } from "mysql";

// // get user details from user_profile table
// export const getUser = (req: Request, res: Response) => {
//   const get_query =
//     "select *,(select count(*) from thankyou_message where sender="+req.params.sso_id+") as SM,(select count(*) from thankyou_message where recipient= "+req.params.sso_id+") as RM,(select count(*) from thankyou_message t1 join acknowledgement_message t2 on t1.message_id=t2.reffer_mid where t1.recipient="+req.params.sso_id+") as SA,(select count(*) from thankyou_message t1  join acknowledgement_message t2 on t1.message_id=t2.reffer_mid where t1.sender="+req.params.sso_id+") as RA from user_profile where sso_id=" + req.params.sso_id;
//   Mysql.getPool().query(get_query, (err: MysqlError, results: any) => {
//     if (err) {
//       // console.log("Error", err);
//       res.status(500).json({ error: err });
//     } else {
//       // console.log("Result: ", results);
//       res.json(results);
//     }
//   });
// };

// //get all users  from user_profile table
// export const getUsers = (req: Request, res: Response) => {
//   const get_user_query = "select * from user_profile";
//   Mysql.getPool().query(get_user_query, (err: MysqlError, results: any) => {
//     if (err) {
//       // console.log("Error", err);
//       res.status(500).json({ error: err });
//     } else {
//       // console.log("Result: ", results);
//       res.json(results);
//     }
//   });
// };

// //update user in user_profile table using sso Id
// export const updateUser = (req: Request, res: Response) => {
//   const user = req.body;
//   const sso_id = user.sso_id;
//   const email = user.email;
//   const first_name = user.first_name;
//   const last_name = user.last_name;
//   const privilege = user.privilege;
//   const status = user.status;
//   const add_user_query =
//     "update user_profile set email= " +
//     `"${email}"` +
//     ",first_name=" +
//     `"${first_name}"` +
//     ",last_name=" +
//     `"${last_name}"` +
//     ",privilege=" +
//     `"${privilege}"` +
//     ",status=" +
//     `${status}` +
//     " where sso_id=" +
//     `"${sso_id}"`;
//   Mysql.getPool().query(add_user_query, (err: MysqlError, results: any) => {
//     if (err) {
//       // console.log("Error", err);
//       res.status(500).json({ error: err });
//     } else {
//       // console.log("Result: ", results);
//       res.json(results);
//     }
//   });
// };

// //add user to user_profile table
// export const addUser = (req: Request, res: Response) => {
//   const user = req.body;
//   const sso_id = user.sso_id;
//   const email = user.email;
//   const first_name = user.first_name;
//   const last_name = user.last_name;
//   const privilege = user.privilege;
//   const status = user.status;

//   const addUserQuery =
//     "insert into user_profile(sso_id,email,first_name,last_name,privilege,status) values " +
//     `("${sso_id}","${email}","${first_name}","${last_name}","${privilege}",${status})`;
//   Mysql.getPool().query(addUserQuery, (err: MysqlError, results: any) => {
//     if (err) {
//       // console.log("Error", err);
//       res.status(500).json({ error: err });
//     } else {
//       // console.log("Result: ", results);
//       res.json(results);
//     }
//   });
// };

// //get all msgs with details
// export const getMsgs = (req: Request, res: Response) => {
//   const get_sent_query =
//     `(select CONCAT (t31.first_name, ' ', t31.last_name) as sender, t31.profile_img as sender_img, CONCAT(t32.first_name,' ',t32.last_name ) as recipient,t32.profile_img as recipient_img, t1.thankyou_text,t1.emoji_id,t2.acknowledgement_text,t1.recipient_type,t1.date_time as thankyou_time,t2.date_time as acknoledgement_time from thankyou_message t1   left outer join acknowledgement_message t2 on t1.message_id = t2.reffer_mid  left outer join user_profile t31 on t1.sender=t31.sso_id  left outer join user_profile t32 on t1.recipient=t32.sso_id where recipient_type='Person') union
//     (select CONCAT (t31.first_name, ' ', t31.last_name) as sender, t31.profile_img as sender_img, g32.group_name as recipient,null as recipient_img, t1.thankyou_text,t1.emoji_id,t2.acknowledgement_text,t1.recipient_type,t1.date_time as thankyou_time,t2.date_time as acknoledgement_time from thankyou_message t1   left outer join acknowledgement_message t2 on t1.message_id = t2.reffer_mid  left outer join user_profile t31 on t1.sender=t31.sso_id  left outer join user_profile t32 on t1.recipient=t32.sso_id left outer join \`group_list\` g32 on t1.recipient=g32.group_id where recipient_type='Group') ORDER BY CASE WHEN acknoledgement_time is null THEN thankyou_time ELSE acknoledgement_time END DESC LIMIT 1000;`;
//   Mysql.getPool().query(
//     get_sent_query,
//     (err: MysqlError, results: any) => {
//       if (err) {
//         // console.log("Error", err);
//         res.status(500).json({ error: err });
//       } else {
//         // console.log("Result: ", results);
//         res.json(results);
//       }
//     });
// };

// // //get all users  from user_profile table
// // export const getMsgCount = (req: Request, res: Response) => {
// //   const get_user_query = "select count(*) as count from thankyou_message";
// //   Mysql.getPool().query(get_user_query, (err: MysqlError, results: any) => {
// //     if (err) {
// //       console.log("Error", err);
// //       res.status(500).json({ error: err });
// //     } else {
// //       console.log("Result: ", results);
// //       res.json(results);
// //     }
// //   });
// // };
