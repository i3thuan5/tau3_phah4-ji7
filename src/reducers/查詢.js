import {
  REQUEST_HANLO,
  RECIEVE_HANLO,
  RECIEVE_ERROR_HANLO,
} from "../actions/action.type";

const 初始state = () => ({
  語句: "",
  腔口: "",
  正在查詢: false,
  發生錯誤: false,
});

const 查詢 = (state = 初始state(), action) => {
  switch (action.type) {
  case REQUEST_HANLO:
    return {
      ...state,
      語句: action.語句,
      腔口: action.腔口,
      正在查詢: true,
    };
  case RECIEVE_HANLO:
    return {
      ...state,
      正在查詢: false,
    };
  case RECIEVE_ERROR_HANLO:
    return {
      ...state,
      正在查詢: false,
      發生錯誤: true,
    };
  default:
    return state;
  }
};

export default 查詢;
