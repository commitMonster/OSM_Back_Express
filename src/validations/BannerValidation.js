import { check, validationResult } from 'express-validator';

export const bannerRequest = async (req, res, next) => {
  const DateTimeRegex = /^([\\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\\:?00)([\\.,]\d+(?!:))?)?(\17[0-5]\d([\\.,]\d+)?)?([zZ]|([\\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
  try {
    await check('title').isString().run(req);
    await check('description').isString().run(req);
    await check('type').isNumeric().run(req);
    await check('image').isString().run(req);
    await check('startDate').matches(DateTimeRegex).run(req);
    await check('endDate').matches(DateTimeRegex).run(req);

    req.body.type = Number(req.body.type);
    req.body.startDate = new Date(req.body.startDate);
    req.body.endDate = new Date(req.body.endDate);

    const error = validationResult(req);
    if (!error.isEmpty()) {
      error.throw();
    }
    next();
  } catch (err) {
    res.status(400);
    res.send(err.mapped());
  }
};
