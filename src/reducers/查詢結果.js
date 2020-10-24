import {
  RECIEVE_HANLO,
  RECIEVE_ERROR_HANLO,
} from "../actions/action.type";

const 初始state = () => ({
  結果語句: "",
  結果腔口: "",
  分詞: "",
  綜合標音: [],
});

const 查詢結果 = (state = 初始state(), action) => {
  switch (action.type) {
  case RECIEVE_HANLO:
    return {
      結果語句: action.語句,
      結果腔口: action.腔口,
      分詞: action.查詢結果.分詞,
      綜合標音: action.查詢結果.kiatko,
    };
  case RECIEVE_ERROR_HANLO:
    return {
      ...state,
      正在查詢: false,
      結果腔口: action.腔口,
      查詢結果: {
        發生錯誤: true,
        ...state.查詢結果,
      },
    };
  default:
    return state;
  }
};

export default 查詢結果;
