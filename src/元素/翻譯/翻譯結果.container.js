import { connect } from "react-redux";
import 翻譯結果 from "./翻譯結果";

const matchStateToProps = state => ({
  腔口: state.查詢結果.結果腔口,
  綜合標音: state.查詢結果.綜合標音,
  分詞: state.查詢結果.分詞,
  發生錯誤: state.查詢.發生錯誤,
  正在查詢: state.查詢.正在查詢,
});

const Container翻譯結果 = connect(
  matchStateToProps,
)(翻譯結果);

export default Container翻譯結果;
