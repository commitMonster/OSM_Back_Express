import express from 'express';
import * as AuthHelper from '../middlewares/AuthHelper';
import * as BasketService from '../services/BasketService';

const router = express.Router();

router.post('/', AuthHelper.isLoggedIn, BasketService.create);
router.post('/once', AuthHelper.isLoggedIn, BasketService.once);
router.get('/', AuthHelper.isLoggedIn, BasketService.findAll);
router.patch('/:id', AuthHelper.isLoggedIn, BasketService.updateById);
router.delete('/:id', AuthHelper.isLoggedIn, BasketService.deleteById);
router.delete('/', AuthHelper.isLoggedIn, BasketService.deleteAll);

export default router;
