import * as ProductRepository from '../repositorys/ProductRepository';

export const create = async (req, res, next) => {
  try {
    const data = req.body;
    data.isDeleted = false;
    const product = await ProductRepository.create(data);
    product.image = product.image.split(',');
    res.send(product);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const updateById = async (req, res, next) => {
  try {
    const data = req.body;
    data.isDeleted = false;
    const product = await ProductRepository.updateById(Number(req.params.id), data);
    product.image = product.image.split(',');
    res.send(product);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const deleteById = async (req, res, next) => {
  try {
    const product = await ProductRepository.deleteById(Number(req.params.id));
    product.image = product.image.split(',');
    res.send(product);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const findById = async (req, res, next) => {
  try {
    const product = await ProductRepository.findById(Number(req.params.id));
    product.image = product.image.split(',');
    res.send(product);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

/**
 *
 * @todo
 * 전체 보여주기(했음)
 * 검색 - 상품명 기준(했음)
 * 정렬 - 가격, 인기(했음)
 * 카테고리 (했음)
 * 삭제 여부 (했음)
 * listSize=60&page=1&(했음)
 * isPriceRange=false&minPrice=&maxPrice=&(했음)
 * orderBy=price&sort=asc(했음)
 * category=& (했음)
 * isDeleted=& (했음)
 * 필터 - 가격(했음)
 * 카테고리 전체
 * + pagination
 */
export const findAll = async (req, res, next) => {
  try {
    const { q, orderBy, sort } = req.query;
    const minPrice = Number(req.query.minPrice);
    const maxPrice = Number(req.query.maxPrice);
    const DEFAULT_MIN_PRICE = -1;
    const DEFAULT_MAX_PRICT = 2100000000;
    const isPriceRange = req.query.isPriceRange === 'true' ? true : false;
    const categoryId = req.query.categoryId ? Number(req.query.categoryId) : null;
    const isDeleted = req.query.isDeleted === 'true' ? true : false;

    const orderOption = {};
    orderOption[orderBy] = sort;

    const whereOption = [{ isDeleted }];
    if (categoryId) {
      whereOption.push({ categoryId });
    }
    if (q) {
      whereOption.push({
        name: {
          contains: q,
        },
      });
    }
    if (isPriceRange) {
      whereOption.push({ price: { gte: minPrice } }, { price: { lte: maxPrice } });
    } else {
      whereOption.push({ price: { gte: DEFAULT_MIN_PRICE } }, { price: { lte: DEFAULT_MAX_PRICT } });
    }

    const productList = await ProductRepository.findAllByWhereOptionOrderByOrderOption(whereOption, orderOption);

    res.send(productList);
  } catch (err) {
    console.error(err);
    next(err);
  }
};
