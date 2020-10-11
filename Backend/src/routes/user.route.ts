
import { addUser } from "../controllers/user.controller";
import { Application } from "express";

export const userRoutes = (app: Application, io: SocketIO.Server) => {
  app.route("/api/v1/user/register/:user_name/:nic/:email/:phone_number/:password").post(addUser);
  
};
