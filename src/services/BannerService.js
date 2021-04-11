import * as BannerRepository from '../repositorys/BannerRepository';
import * as DateTime from '../utils/DateTime';

const formatBanner = banner => {
  banner.startDate = DateTime.format(banner.startDate);
  banner.endDate = DateTime.format(banner.endDate);
  banner.image = banner.image.split(',');

  return banner;
};

export const create = async (req, res, next) => {
  try {
    const banner = await BannerRepository.create(req.body);
    res.send(banner);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const findAll = async (req, res, next) => {
  const sort = req.query.orderBy || 'asc';
  try {
    let banners;
    if (req.query.start) {
      if (req.query.end) {
        const start = new Date(req.query.start + ' 00:00:00');
        const end = new Date(req.query.end + ' 23:59:59');
        banners = await BannerRepository.findAllBetween(start, end, sort);
      }
      res.status(400).send({ message: '종료 일자는 필수 항목입니다.' });
    } else {
      banners = await BannerRepository.findAllOrderBy(sort);
    }
    console.log(banners);
    banners.map(banner => formatBanner(banner));
    res.send(banners);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const findById = async (req, res, next) => {
  try {
    const banner = formatBanner(await BannerRepository.findById(Number(req.params.id)));
    res.send(banner);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const updateById = async (req, res, next) => {
  try {
    const banner = await BannerRepository.updateById(Number(req.params.id), req.body);
    res.send(banner);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const updateActivationById = async (req, res, next) => {
  try {
    const banner = await BannerRepository.updateActivationById(Number(req.params.id), req.body.activation);
    res.send(banner);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const deleteById = async (req, res, next) => {
  try {
    await BannerRepository.deleteById(Number(req.params.id));
    res.send({ message: '삭제 성공' });
  } catch (err) {
    console.error(err);
    next(err);
  }
};