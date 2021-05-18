import { check, validationResult } from 'express-validator';

export const joinRequest = async (req, res, next) => {
  try {
    await check('userId').isString().run(req);
    await check('password')
      .isLength({ min: 8, max: 12 })
      .bail()
      .matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[$@!%*#?&])[a-z0-9$@!%*#?&]{8,12}$/)
      .run(req);
    await check('email').isEmail().run(req);
    await check('name').isString();
    await check('address').isString();

    const error = validationResult(req);
    if (!error.isEmpty()) {
      error.throw();
    }
    next();
  } catch (err) {
    res.status(400);
    return res.send(err.mapped());
  }
};

export const idRequest = async (req, res, next) => {
  try {
    await check('userId').isString().isLength({ min: 4, max: 30 }).run(req);

    const error = validationResult(req);
    if (!error.isEmpty()) {
      error.throw();
    }
    next();
  } catch (err) {
    res.status(400);
    return res.send(err.mapped());
  }
};
