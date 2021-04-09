import express from 'express';
import { AuthHelper } from '../middlewares/AuthHelper';
import { AuthService } from '../services/AuthService';
import { JoinValidaton } from '../validations/JoinValidation';

const router = express.Router();
const authHelper = new AuthHelper();
const authService = new AuthService();
const joinValidation = new JoinValidaton();

router.post('/login', authHelper.isNotLoggedIn, authHelper.login);
router.post('/logout', authHelper.isLoggedIn, authHelper.logout);
router.post('/join', joinValidation.JoinRequest, authHelper.isNotLoggedIn, authService.join);

export default router;
