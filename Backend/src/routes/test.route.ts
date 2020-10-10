
import { Application } from "express";
import { SocketDotIO } from "socket.io";
import { getTest } from "../controllers/test.controller";

export const testRoutes = (app: Application, io: SocketIO.Server) => {

  app.route("/api/v1/test").get(getTest);

};
