import express from 'express';
import * as AuthHelper from '../middlewares/AuthHelper';
import * as ProductService from '../services/ProductService';
import * as ProductValidation from '../validations/ProductValidation';

const router = express.Router();

// Admin 전용
router.post('/', AuthHelper.isLoggedIn, AuthHelper.isAdmin, ProductValidation.productRequest, ProductService.create); // 등록
router.patch('/:id', AuthHelper.isLoggedIn, AuthHelper.isAdmin, ProductValidation.productRequest, ProductService.updateById); // 상품 수정
router.delete('/:id', AuthHelper.isLoggedIn, AuthHelper.isAdmin, ProductService.deleteById); // 배너 삭제 --> 실제 삭제가 아니다!

// 공용
router.get('/', ProductService.findAll); // 검색, 정렬, 필터 다 되어야 한다!
router.get('/new', ProductService.findNew);
router.get('/popular', ProductService.findPopular);
router.get('/:id', ProductService.findById); // id 별 상세 조회

export default router;
