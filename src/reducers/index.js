import { combineReducers } from "redux";
import 查詢 from "./查詢";
import 查詢結果 from "./查詢結果";

const reducer = combineReducers({
  查詢,
  查詢結果,
});

export default reducer;
