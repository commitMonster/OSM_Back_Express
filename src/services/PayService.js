import axios from 'axios';
import qs from 'qs';
import env from '../configs';
import * as OrderRepository from '../repositorys/OrderRepository';

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  Authorization: `KakaoAK ${env.ADMIN_KEY}`,
};

export const request = async (req, res, next) => {
  try {
    const data = qs.stringify({
      cid: 'TC0ONETIME',
      partner_order_id: '00000001',
      partner_user_id: 'test_user',
      item_name: 'SeoulTech SE',
      quantity: 1,
      total_amount: req.body.price,
      tax_free_amount: req.body.price,
      approval_url: `${env.HOST}:${env.PORT}/pay/success`,
      cancel_url: `${env.HOST}:${env.PORT}/pay/cancel`,
      fail_url: `${env.HOST}:${env.PORT}/pay/cancel`,
    });

    const kakaoRequest = await axios({
      url: 'https://kapi.kakao.com/v1/payment/ready',
      method: 'POST',
      headers,
      data,
    });

    if (kakaoRequest.status === 200) {
      const data = {
        id: kakaoRequest.data.tid,
        userId: req.user.id,
        total: req.body.price,
        delivery: req.body.delivery,
        destinationId: req.body.destinationId,
        list: req.body.list,
        state: 'wait',
      };
      await OrderRepository.create(data);
      res.redirect(kakaoRequest.data.next_redirect_pc_url);
    } else {
      res.status(400).send({ message: '결제에 실패했습니다.' });
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const success = async (req, res, next) => {
  try {
    const order = await OrderRepository.findAllByUserIdAndStateIsWait(req.user.id);

    const data = qs.stringify({
      cid: 'TC0ONETIME',
      tid: order[0].id,
      partner_order_id: '00000001',
      partner_user_id: 'test_user',
      pg_token: req.query.pg_token,
    });

    const kakaoRequest = await axios({
      url: 'https://kapi.kakao.com/v1/payment/approve',
      method: 'POST',
      headers,
      data,
    });

    if (kakaoRequest.status === 200) {
      //const
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const cancel = (req, res) => {
  res.send('Payment Canceled... -_-;;');
};

export const fail = (req, res) => {
  res.send('Payment Failed... T_T');
};
