import axios from 'axios';
import qs from 'qs';
import env from '../configs';

export const request = async (req, res, next) => {
  try {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      Authorization: `KakaoAK ${env.ADMIN_KEY}`,
    };

    const data = qs.stringify({
      cid: 'TC0ONETIME',
      partner_order_id: '00000001',
      partner_user_id: 'test_user',
      item_name: 'SeoulTech SE',
      quantity: 1,
      total_amount: req.body.prise,
      tax_free_amount: req.body.prise,
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

    res.redirect(kakaoRequest.data.next_redirect_pc_url + `?tid=${kakaoRequest.data.tid}`);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const success = (req, res) => {
  res.send('Payment Success!');
};

export const cancel = (req, res) => {
  res.send('Payment Canceled... -_-;;');
};

export const fail = (req, res) => {
  res.send('Payment Failed... T_T');
};
