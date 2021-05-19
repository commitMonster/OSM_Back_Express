import express from 'express';
import * as AuthHelper from '../middlewares/AuthHelper';
import * as DestinationService from '../services/DestinationService';

const router = express.Router();

router.post('/', AuthHelper.isLoggedIn, DestinationService.create);
router.get('/', AuthHelper.isLoggedIn, DestinationService.findAll);
router.patch('/:id', AuthHelper.isLoggedIn, DestinationService.updateById);
router.delete('/:id', AuthHelper.isLoggedIn, DestinationService.deleteById);

export default router;
