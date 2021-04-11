import express from 'express';

const router = express.Router();

router.post('/'); // 등록
router.get('/'); // 전체 조회 & 조건 조회
router.patch('/:id'); // 배너 수정
router.patch('/:id/activate'); // 배너 활성화/비활성화
router.delete('/:id'); // 배너 삭제

export default router;
