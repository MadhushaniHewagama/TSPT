
// import {
//   getLoginStatus,
//   getpinVerification
// } from "../controllers/auth.controller";
import { Application } from "express";
import { SocketDotIO } from "socket.io";

export const authRoutes = (app: Application, io: SocketIO.Server) => {
  // console.log("Initializing auth routes");

  // app.route("/api/v1/users/auth/:sso_id/login/:uu_id")
  //   .get(getLoginStatus);

  // app.route("/api/v1/users/auth/:sso_id/login/:uu_id/pin/:pin")
  //   .get(getpinVerification);
};
