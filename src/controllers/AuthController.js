import express from 'express';
import * as AuthHelper from '../middlewares/AuthHelper';
import * as AuthService from '../services/AuthService';
import * as JoinValidaton from '../validations/JoinValidation';

const router = express.Router();
router.post('/login', AuthHelper.isNotLoggedIn, AuthHelper.login);
router.post('/logout', AuthHelper.isLoggedIn, AuthHelper.logout);
router.post('/join', JoinValidaton.joinRequest, AuthHelper.isNotLoggedIn, AuthService.join);
router.post('/check', JoinValidaton.idRequest, AuthHelper.isNotLoggedIn, AuthService.isIdDuplicated);

export default router;
