import express from 'express';
import * as AuthHelper from '../middlewares/AuthHelper';
import * as ImageService from '../services/ImageService';

const router = express.Router();

router.use('/', express.static(`${__dirname}/../../images`));
router.post('/', AuthHelper.isLoggedIn, ImageService.uploader.array('files'), ImageService.upload);
router.delete('/', ImageService.deletePhoto);

export default router;
