import express from 'express';
import * as AuthHelper from '../middlewares/AuthHelper';
import * as ReviewService from '../services/ReviewService';

const router = express.Router();

router.get('/:id', AuthHelper.isLoggedIn, ReviewService.findReview);
router.post('/', AuthHelper.isLoggedIn, ReviewService.create);

export default router;
