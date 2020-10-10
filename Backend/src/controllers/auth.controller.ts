// import { Application, Request, Response } from "express";
// import Mysql from "../config/db";
// import { FieldInfo, MysqlError } from "mysql";
// import { request } from "https";

// var moment = require("moment");

// export const getLoginStatus = (req: Request, res: Response) => {
//   Mysql.getPool().query(
//     "SELECT `login_id`, `user_profile`.`sso_id`, concat(user_profile.first_name,' ',user_profile.last_name) as username, `email`, `privilege`, `status`, `device_id`, `login_status`.`login_status`,`otp`,`attempt`  " +
//       " FROM `user_profile` left JOIN `login_status` ON `user_profile`.`sso_id` = `login_status`.`sso_id` where `user_profile`.`sso_id` = '" +
//       req.params.sso_id +
//       "';",
//     (err: MysqlError, results: any) => {
//       if (err) {
//         // // console.log("Error2", err);
//         res.json({ error1: err });
//       } else {
//         // // console.log("Result: ", results);
//         if (results.length == 0) {
//           res.json({ status_of_req: "ssoError" });
//         } else if (results[0].status == 0) {
//           res.json({ status_of_req: "ssoInactive" });
//         } else {
//           var alreadyExist: number = -1;
//           for (let index = 0; index < results.length; index++) {
//             if (
//               results[index].device_id == req.params.uu_id &&
//               results[index].otp
//             ) {
//               alreadyExist = index;
//               break;
//             }
//           }
//           let now = moment().format("YYYY-MM-DD HH:mm:ss");
//           // myDate =  moment(data.myTime.format('YYYY/MM/DD HH:mm:ss')).format();
//           // console.log(now);
//           const newOtp = 111111;
//             //Math.floor(Math.random() * Math.floor(899999)) + 100000;
//           if (alreadyExist == -1) {
//             var sqlquery =
//               "INSERT INTO `tydb`.`login_status` (`sso_id`, `device_id`, `login_status`, `otp`, `time_stamp`) VALUES ('" + req.params.sso_id +
//               "', '" + req.params.uu_id + "', 'Loggedout', '" + otpHash + "', '" + now + "');";
//           } else {
//             var sqlquery =
//               "UPDATE `tydb`.`login_status`" + "SET `otp` = '" + otpHash + "', `time_stamp` = '" + now +
//               "' WHERE `login_id` = '" + results[alreadyExist].login_id + "';";
//           }

//           Mysql.getPool().query(sqlquery, (err: MysqlError, inres: any) => {
//             if (err) {
//               res.json({ error1: err });
//             } else {
//               // console.log("REEEEEEE::::::", inres);
//               const resp = {
//                 login_id:
//                   alreadyExist == -1 ? inres.insertId : results[alreadyExist].login_id,
//                 sso_id: req.params.sso_id,
//                 email: results[0].email,
//                 privilege: results[0].privilege,
//                 status: results[0].status,
//                 attempt: alreadyExist == -1 ? 0 : results[alreadyExist].attempt,
//                 device_id: req.params.uu_id,
//                 login_status: "LoggedOut",
//                 status_of_req: "Valid"
//               };
//               res.json(resp);
//             }
//           });
//           //res.json({ status_of_req: "newDevice", otp: otpHash });
//         }
//       }
//       // // console.log(results);
//       // res.json(results);
//     }
//   );
// };

// export const getpinVerification = (req: Request, res: Response) => {
//   const sqlQuery = "select `login_id`, `login_status`, `time_stamp`, `attempt`, `otp` from `login_status` WHERE `sso_id` = '" + req.params.sso_id + "' and `device_id` = '" + req.params.uu_id + "';";
//   // console.log(sqlQuery);
//   Mysql.getPool().query(sqlQuery, (err: MysqlError, results: any) => {
//     if (err) { res.json({ error1: err }); }
//     else {
//       if (results.length !== 1) { // SSO or Device ID Error
//         // console.log("divie id err");
//       }
//       else if (results[0].otp !== req.params.pin) { // Pin Error
//         // console.log(results[0].attempt);
//         if (Number(results[0].attempt) < 2) {  // Two more attempts
//           Mysql.getPool().query(
//             "UPDATE `login_status` SET `attempt` = `attempt` + 1 WHERE `sso_id` = '" + req.params.sso_id + "' and `device_id` = '" + req.params.uu_id + "';",
//             (err: MysqlError, res1: any) => {
//               if (err) { res.json({ error1: err }); }
//               else { res.json({ pinVarification: "pinerror", attempt: results[0].attempt + 1 }); }
//             }
//           );
//         }
//         else {  // Inactive the account
//           Mysql.getPool().query(
//             "Update `login_status`, `user_profile` SET `user_profile`.`status` = 0, `login_status`.`attempt` = 0 where `login_status`.`sso_id`=`user_profile`.`sso_id` and `user_profile`.`sso_id` = '"+req.params.sso_id+"';",
//             (err: MysqlError, res2: any) => {
//               if (err) { res.json({ error1: err }); }
//               else { res.json({ pinVarification: "inactive", attempt: results[0].attempt + 1 }); }
//             }
//           );
//         }
//       }
//       else if (results[0].otp === req.params.pin) { // Pin Correct
//         if (
//           moment(results[0].time_stamp).isBefore(moment().subtract(10, "m")) // Time out
//         ) { 
//           res.json({ pinVarification: "sessiontimeout" });
//           // console.log("Session timeout");
//         }
//         else {
//           Mysql.getPool().query(
//             "Update `login_status` SET `login_status`.`attempt` = 0 where `login_status`.`sso_id`= '"+req.params.sso_id+"';",
//             (err: MysqlError, res2: any) => {
//               if (err) { res.json({ error1: err }); }
//               else { res.json({ pinVarification: "pinvalid" }); }
//             }
//           );
//         }
//       }
//     }
//   });
// };