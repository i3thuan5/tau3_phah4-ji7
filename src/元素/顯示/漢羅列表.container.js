import { connect } from "react-redux";
import 漢羅列表 from "./漢羅列表";


const matchStateToProps = state => ({
  綜合標音: state.查詢.查詢結果.綜合標音,
});

const Container漢羅列表 = connect(
  matchStateToProps,
)(漢羅列表);

export default Container漢羅列表;
