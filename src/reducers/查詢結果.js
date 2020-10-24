import {
  RECIEVE_HANLO,
  RECIEVE_ERROR_HANLO,
} from "../actions/action.type";

export const 正規化綜合標音 = (綜合標音 = []) => {
  if (!綜合標音 || 綜合標音.length === 0) {
    return [];
  }
  const first = 綜合標音[0];
  const keys = Object.keys(first);
  const newKeys = keys.filter(x => (
    x !== "臺羅閏號調" && x !== "臺灣客話"
  ));
  return 綜合標音.map((t) => {
    const result = {};
    result.羅馬字 = t.臺羅閏號調 || t.臺灣客話;
    newKeys.forEach((k) => { result[k] = t[k]; });
    return result;
  });
};

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
      綜合標音: 正規化綜合標音(action.查詢結果.綜合標音),
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
