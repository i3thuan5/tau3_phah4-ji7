import superagent from 'superagent-bluebird-promise';
import {
  REQUEST_HANLO,
  RECIEVE_HANLO,
  RECIEVE_ERROR_HANLO
} from './action.type';
import { 後端網址, 標漢字音標 } from '../後端網址';

export const 請求遠端查詢 = 語句 => ({
  type: REQUEST_HANLO,
  語句,
});

export const 收到遠端查詢 = (語句, body) => ({
  type: RECIEVE_HANLO,
  語句,
  '查詢結果': body,
});

export const 遠端查詢發生錯誤 = (語句) => ({
  type: RECIEVE_ERROR_HANLO,
  語句,
});

export const 遠端查詢 = 語句 => dispatch => {
  dispatch(請求遠端查詢(語句));
  return superagent
    .get(後端網址 + 標漢字音標)
    .query({
        '查詢腔口': '閩南語',
        '查詢語句': 語句.trim(),
      })
    .then(({ body }) => dispatch(收到遠端查詢(語句, body)))
    .catch(error => dispatch(遠端查詢發生錯誤(語句)));
};

export const 是否可以請求查詢 = (state, 語句) => {
  if (state.查詢.語句 === 語句 ||
    state.查詢.正在查詢)
  {
    return false;
  }

  return true;
};

export const 查詢語句 = 語句 => (dispatch, getState) => {
  if (是否可以請求查詢(getState(), 語句)) {
    return dispatch(遠端查詢(語句));
  }
};
