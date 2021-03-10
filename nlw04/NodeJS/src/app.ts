import 'reflect-metadata';
import express, { json, NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import createConnection from './database';

import router from './routes';
import AppErrors from './errors/AppErrors';

createConnection();
const app = express();

app.use(json());
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppErrors) {
      return response.status(err.statusCode).json({
        message: err.message
      });
    }

    return response.status(500).json({
      status: 'Error',
      message: 'Internal server error'
    });
  });

export default app;
