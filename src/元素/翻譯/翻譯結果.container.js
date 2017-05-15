import { connect } from "react-redux";
import 翻譯結果 from "./翻譯結果";

const matchStateToProps = state => ({
  正在查詢: state.查詢.正在查詢,
  查詢結果: state.查詢.查詢結果,
});

const Container翻譯結果 = connect(
  matchStateToProps,
)(翻譯結果);

export default Container翻譯結果;
