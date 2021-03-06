import express from 'express';
import * as AuthHelper from '../middlewares/AuthHelper';
import * as AuthService from '../services/AuthService';
import * as JoinValidaton from '../validations/JoinValidation';

const router = express.Router();
router.get('/', AuthHelper.isLoggedIn, AuthService.find);
router.post('/signin', AuthHelper.isNotLoggedIn, AuthHelper.signin);
router.post('/signout', AuthHelper.isLoggedIn, AuthHelper.signout);
router.post('/signup', JoinValidaton.joinRequest, AuthHelper.isNotLoggedIn, AuthService.signup, AuthHelper.signin);
router.post('/check/:type', AuthHelper.isNotLoggedIn, AuthService.isDuplicated);

export default router;
