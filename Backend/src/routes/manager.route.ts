
import { getUsers ,getUser,getOverview, getInspectors,getTickets,getRoutes} from "../controllers/manager.controller";
import { Application } from "express";

export const managerRoutes = (app: Application, io: SocketIO.Server) => {
  app.route("/api/v1/manager/view-users").get(getUsers);
  app.route("/api/v1/manager/view-user/:user_name").get(getUser);
  app.route("/api/v1/manager/overview").get(getOverview);
  app.route("/api/v1/manager/view-inspectors").get(getInspectors);
  app.route("/api/v1/manager/reports").get(getTickets);
  app.route("/api/v1/manager/time-table").get(getRoutes);

};
