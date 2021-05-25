import express from 'express';
import * as PayService from '../services/PayService';

const router = express.Router();

// 결제 요청
router.post('/', PayService.request);

// 결제 이후 상황
router.get('/success', PayService.success);
router.get('/cancel', PayService.cancel);
router.get('/fail', PayService.fail);
export default router;
