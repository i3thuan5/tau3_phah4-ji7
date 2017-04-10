import superagent from 'superagent-bluebird-promise';
import {
  REQUEST_HANLO,
  RECIEVE_HANLO
} from './action.type';

export const 請求遠端查詢 = 語句 => ({
  type: REQUEST_HANLO,
  語句,
});

export const 收到遠端查詢 = (語句, body) => ({
  type: RECIEVE_HANLO,
  語句,
  '查詢結果': body,
});

export const 查詢語句 = 語句 => dispatch => {
  dispatch(請求遠端查詢(語句));
  return superagent
    .get('http://140.109.16.144/標漢字音標')
    .query({
        '查詢腔口': '閩南語',
        '查詢語句': 語句.trim(),
      })
    .then(({ body }) => dispatch(收到遠端查詢(語句, body)));
};
