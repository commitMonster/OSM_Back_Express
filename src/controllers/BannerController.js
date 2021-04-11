import express from 'express';
import * as AuthHelper from '../middlewares/AuthHelper';
import * as BannerService from '../services/BannerService';
import * as BannerValidation from '../validations/BannerValidation';

const router = express.Router();

// Admin 전용
router.post('/', AuthHelper.isLoggedIn, AuthHelper.isAdmin, BannerValidation.bannerRequest, BannerService.create); // 등록
router.patch('/:id', AuthHelper.isLoggedIn, AuthHelper.isAdmin, BannerValidation.bannerRequest, BannerService.updateById); // 배너 수정
router.patch('/:id/activate', AuthHelper.isLoggedIn, AuthHelper.isAdmin, BannerService.updateActivationById); // 배너 활성화/비활성화
router.delete('/:id', AuthHelper.isLoggedIn, AuthHelper.isAdmin, BannerService.deleteById); // 배너 삭제

// 공용
router.get('/', BannerService.findAll); // 전체 조회 & 조건 조회
router.get('/:id', BannerService.findById); // id 별 상세 조회

export default router;
