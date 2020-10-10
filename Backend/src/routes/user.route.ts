
// import {
//   getUser,
//   getUsers,
//   updateProfile,
//   deleteProfile, 
//   getInbox, 
//   getSent,
//   getProfile,
//   getInboxCount,
//   getSentCount,
//   setReadThankYouMsg,
//   setReadAcknowledgmentMsg
// } from "../controllers/user.controller";
import { Application } from "express";
import { SocketDotIO } from "socket.io";

export const userRoutes = (app: Application, io: SocketIO.Server) => {
  // console.log("Initializing user routes");
  // app.route("/api/v1/users").get(getUsers);

  // app.route("/api/v1/users/:sso_id/profile")
  //   .get(getProfile)
  //   .put(updateProfile)
  //   .delete(deleteProfile);

  // app.route("/api/v1/users/:sso_id").get(getUser);
  // app.route("/api/v1/inbox/:sso_id").get(getInbox);
  // app.route("/api/v1/sent/:sso_id").get(getSent);
  // app.route("/api/v1/inbox_count/:sso_id").get(getInboxCount);
  // app.route("/api/v1/sent_count/:sso_id").get(getSentCount);
  // app.route("/api/v1/thankyou_read").put(setReadThankYouMsg);
  // app.route("/api/v1/acknowledgement_read").put(setReadAcknowledgmentMsg);
};
