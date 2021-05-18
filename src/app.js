import bodyparser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import passport from 'passport';
import env from './configs';
import passportConfig from './configs/passport';
import AuthController from './controllers/AuthController';
import BannerController from './controllers/BannerController';
import BasketController from './controllers/BasketController';
import ImageController from './controllers/ImageController';
import ProductController from './controllers/ProductController';
import { errorHandler, logHandler } from './middlewares/ErrorHandler';

const app = express();
passportConfig(passport);

// App middleware
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cookieParser(env.COOKIE_SECRET));
app.use(session({ secret: env.COOKIE_SECRET, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Add router
app.use('/images', ImageController);
app.use('/auth', AuthController);
app.use('/banner', BannerController);
app.use('/product', ProductController);
app.use('/basket', BasketController);

app.use(logHandler);
app.use(errorHandler);

export default app;
