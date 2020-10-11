
import {
  getLogin,
//   getpinVerification
} from "../controllers/auth.controller";
import { Application } from "express";

export const authRoutes = (app: Application, io: SocketIO.Server) => {
  // console.log("Initializing auth routes");

  app.route("/api/v1/users/auth/:user_name")
    .get(getLogin);

  // app.route("/api/v1/users/auth/:sso_id/login/:uu_id/pin/:pin")
  //   .get(getpinVerification);
};
