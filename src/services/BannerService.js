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
    const banner = formatBanner(await BannerRepository.create(req.body));
    return res.send(banner);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const findAll = async (req, res, next) => {
  const sort = req.query.orderBy || 'asc';
  try {
    let banners;
    if (req.query.start && req.query.end) {
      // 선택한 날짜에 진행 중인 이벤트
      const start = new Date(req.query.start + ' 00:00:00');
      const end = new Date(req.query.end + ' 23:59:59');
      banners = await BannerRepository.findAllBetween(start, end, sort);
    } else if (req.query.sort === 'now') {
      // 현재 진행 중인 이벤트
      const end = new Date(new Date().toLocaleDateString() + ' 23:59:59');
      banners = await BannerRepository.findAllByEndDate(end, sort);
    } else if (req.query.sort === 'end') {
      // 종료된 이벤트
      const start = new Date(new Date().toLocaleDateString() + ' 00:00:00');
      banners = await BannerRepository.findAllByStartDate(start, sort);
    } else {
      res.status(400).send({ message: '요청 인자가 올바르지 않습니다.' });
    }
    banners.map(banner => formatBanner(banner));
    return res.send(banners);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const findById = async (req, res, next) => {
  try {
    const banner = formatBanner(await BannerRepository.findById(Number(req.params.id)));
    return res.send(banner);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const updateById = async (req, res, next) => {
  try {
    const banner = formatBanner(await BannerRepository.updateById(Number(req.params.id), req.body));
    return res.send(banner);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const updateActivationById = async (req, res, next) => {
  try {
    const banner = formatBanner(await BannerRepository.updateActivationById(Number(req.params.id), req.body.activation));
    return res.send(banner);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const deleteById = async (req, res, next) => {
  try {
    await BannerRepository.deleteById(Number(req.params.id));
    return res.send({ message: '삭제 성공' });
  } catch (err) {
    console.error(err);
    next(err);
  }
};
