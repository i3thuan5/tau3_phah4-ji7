import {
  REQUEST_HANLO,
  RECIEVE_HANLO
} from '../actions/action.type';

const 初始state = {
  語句: undefined,
  正在查詢: false,
  查詢結果: {},
};

const 查詢 = (state=初始state, action) => {
  switch (action.type) {
    case REQUEST_HANLO:
      return {
        ...初始state,
        語句: action.語句,
        正在查詢: true,
      };
    case RECIEVE_HANLO:
      return {
        語句: action.語句,
        正在查詢: false,
        查詢結果: action.查詢結果,
      };
    default:
      return state;
  }
};

export default 查詢;
