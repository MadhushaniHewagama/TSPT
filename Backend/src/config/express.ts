
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { ErrorRequestHandler, NextFunction, Response, Request, Application } from 'express';
import express from 'express';
import http, { Server } from 'http';
import socketDotIO from 'socket.io';
import cors from 'cors';
import MySQL from './db';

import { userRoutes } from '../routes/user.route';
import { authRoutes } from '../routes/auth.route';
import { adminRoutes } from '../routes/admin.route';
import { testRoutes } from '../routes/test.route';
import { managerRoutes } from '../routes/manager.route';

//config = require('./config');

/**
* @description - initializing application configurations and middle layers
*/
const initializedAppConfigs = (app: Application) => {
  
  app.use(cors());

  // setup static resources
  // app.use('/static', express.default('public'));

  // error handler, send stacktrace only during development
  app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => { // eslint-disable-line no-unused-vars
    console.log(err);

    const status = err.status ? err.status : 400;
    return res.status(status)
      .json({
        message: err.message,
        // TODO: enable this after adding the environments
        // stack: config.env === 'development' || config.env.env === "dev" ? err.stack : {}
        stack: err.stack
      });
  });
 
 
  const server = http.createServer(app);
  const io = socketDotIO(server);

  return {server, io};
 }


 /**
 * @desc - setup db connection and models
 */
const initDbConfigs = () => {
  new MySQL();

}

/**
* @desc - initialize the all sever routes (REST end points);
*/
const initializeServerRoutes = (app: Application, io: socketDotIO.Server) => {
 
  userRoutes(app, io); // setting up user routes
  authRoutes(app, io); 
  adminRoutes(app,io); // setting up admin routes
  testRoutes(app,io);
  managerRoutes(app,io);

}



/**
* @desc - initialize the application
*/
export const init = (): {server: Application, io: socketDotIO.Server} => {
  const app: Application = express();
  const {io, server} = initializedAppConfigs(app);
  
  console.log('ioSET');
  initDbConfigs();

  initializeServerRoutes(app, io);
  return {server, io};
}
