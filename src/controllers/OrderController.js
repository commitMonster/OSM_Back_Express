import express from 'express';
import * as AuthHelper from '../middlewares/AuthHelper';
import * as PayService from '../services/OrderService';

const router = express.Router();

// 결제 이후 상황
router.post('/success', AuthHelper.isLoggedIn, PayService.success);
router.post('/cancel', AuthHelper.isLoggedIn, PayService.cancel);

// User & 어드민
router.get('/', AuthHelper.isLoggedIn, PayService.findList);
router.patch('/manage/:id', AuthHelper.isLoggedIn, PayService.change);

export default router;
