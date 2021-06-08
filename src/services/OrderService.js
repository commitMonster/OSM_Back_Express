import * as BasketProductRepository from '../repositorys/BasketProductRepository';
import * as BasketRepository from '../repositorys/BasketRepository';
import * as OrderRepository from '../repositorys/OrderRepository';

export const success = async (req, res, next) => {
  try {
    const data = {
      id: req.body.id,
      userId: req.user.id,
      total: req.body.price,
      delivery: req.body.delivery,
      destinationId: req.body.destinationId,
      list: req.body.list,
      state: 'wait',
    };
    console.log(data);
    const order = await OrderRepository.create(data);
    const deleteBasket = await BasketRepository.deleteManyInOrder(
      req.user.id,
      order.list.split(',').map(v => Number(v))
    );
    return res.send(deleteBasket);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const cancel = async (req, res, next) => {
  try {
    const id = req.body.id;
    const currentOrder = await OrderRepository.findById(id);
    await BasketRepository.updateIsDeletedManyInOrder(
      req.user.id,
      currentOrder.list.split(',').map(v => Number(v))
    );
    await OrderRepository.deleteById(id);
    return res.send({ message: '삭제 성공' });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const findList = async (req, res, next) => {
  try {
    const pageSize = Number(req.query.pageSize);
    const page = Number(req.query.page);
    const endDate = req.query.end ? new Date(req.query.end) : new Date();
    const startDate = req.query.start ? new Date(req.query.start) : new Date(new Date().setMonth(new Date().getMonth() - 1));

    console.log(startDate, endDate);
    const pagination = { skip: pageSize * (page - 1), take: pageSize };
    const whereOption = [{ creaetdAt: { gte: startDate } }, { creaetdAt: { lte: endDate } }];

    if (req.user.isAdmin === false) {
      whereOption.push({ userId: req.user.id });
    }

    console.log(whereOption);
    const orderList = await OrderRepository.findAllByWhereOptionAndPagination(whereOption, pagination);
    const orderCount = await OrderRepository.countAllByWhereOption(whereOption);

    for (let i = 0; i < orderList.length; ++i) {
      orderList[i].list = orderList[i].list.split(',').map(v => Number(v));
      const basketProduct = await BasketProductRepository.findAllByOrderList(orderList[i].list);
      orderList[i].basket = basketProduct;
      orderList[i].basket.map(v => {
        v.product.image = v.product.image.split(',');
      });
      orderList[i].destination = orderList[i].user.Destination.filter(v => orderList[i].destinationId === v.id)[0];

      delete orderList[i].user;
    }

    return res.send({ orderList, orderCount });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const change = async (req, res, next) => {
  try {
    // 현재 상품의 상태에 따라 상태를 변경 시켜줘야 함
    // 결제 완료 --> 배송중 --> 배송완료 --> 구매확정
    const orderId = req.params.id;
    const findOrder = await OrderRepository.findById(orderId);
    let state;
    switch (findOrder.state) {
      case 'wait':
        state = 'shipping';
        break;
      case 'shipping':
        state = 'shipped';
        break;
      case 'shipped':
        state = 'complete';
        break;
      default:
        return res.status(400).send({ message: '해당 주문 내역의 상태를 수정할 수 없습니다.' });
    }

    const updateOrder = await OrderRepository.updateStateeById(orderId, state);
    return res.send(updateOrder);
  } catch (err) {
    console.error(err);
    next(err);
  }
};
