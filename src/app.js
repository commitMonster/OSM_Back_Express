import bodyparser from 'body-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { errorHandler, logHandler } from './middlewares/errorHandler.js';

const app = express();

// App middleware
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(logHandler);
app.use(errorHandler);

export default app;
