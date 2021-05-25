import express from 'express';
import * as AuthHelper from '../middlewares/AuthHelper';
import * as UserService from '../services/UserService';

const router = express.Router();
router.get('/', AuthHelper.isLoggedIn, UserService.find);

export default router;
