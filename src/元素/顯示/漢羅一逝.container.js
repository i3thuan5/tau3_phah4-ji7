import { connect } from "react-redux";
import 漢羅一逝 from "./漢羅一逝";

const matchStateToProps = state => ({
  綜合標音: state.查詢.查詢結果.綜合標音,
});

const Container漢羅一逝 = connect(
  matchStateToProps,
)(漢羅一逝);

export default Container漢羅一逝;
