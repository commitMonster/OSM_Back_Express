import { check, validationResult } from 'express-validator';

/**
 *
 * @todo 비밀번호의 제약 조건에 대해서 고객에게 다시 여쭤봐야 함.
 */
export class JoinValidaton {
  async JoinRequest(req, res, next) {
    try {
      await check('userId').isString().run(req);
      await check('password')
        .isLength({ min: 8, max: 12 })
        .bail()
        .matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[$@!%*#?&])[a-z0-9$@!%*#?&]{8,12}$/)
        .run(req);
      await check('email').isEmail().run(req);
      await check('name').isString();

      const error = validationResult(req);
      if (!error.isEmpty()) {
        error.throw();
      }
      next();
    } catch (err) {
      res.status(400);
      res.send(err.mapped());
    }
  }
}