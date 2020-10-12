
import { getTickets} from "../controllers/inspector.controller";
import { Application } from "express";

export const inspectorRoutes = (app: Application, io: SocketIO.Server) => {
  app.route("/api/v1/inspector/tickets").get(getTickets);

 
};
