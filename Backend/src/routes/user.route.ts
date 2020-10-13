
import { addUser,getUser,addCredit,getTrips ,createQR,getCredit,endTrip} from "../controllers/user.controller";
import { Application } from "express";

export const userRoutes = (app: Application, io: SocketIO.Server) => {
  app.route("/api/v1/user/register/:user_name/:nic/:email/:phone_number/:password").post(addUser);
  app.route("/api/v1/user/profile/:user_name").get(getUser);
  app.route("/api/v1/user/account/:user_name/:credit").put(addCredit);
  app.route("/api/v1/user/view-trips/:user_name").get(getTrips);
  app.route("/api/v1/user/qr/:start_loc/:end_loc/:fare/:bus_id/:user_name/:violation").post(createQR);
  app.route("/api/v1/user/qr/:user_name").get(getCredit);
  app.route("/api/v1/user/qr/:ticket_id").put(endTrip);
};
