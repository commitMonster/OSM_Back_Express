import { check, validationResult } from 'express-validator';

export const productRequest = async (req, res, next) => {
  try {
    await check('name').isString().run(req);
    await check('description').isString().run(req);
    await check('stock').isNumeric().run(req);
    await check('price').isNumeric().run(req);
    await check('image').isString().run(req);
    await check('delivery').isNumeric().run(req);
    await check('categoryId').isNumeric().run(req);

    req.body.count = Number(req.body.count);
    req.body.price = Number(req.body.price);

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
