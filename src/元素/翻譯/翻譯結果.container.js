import { connect } from 'react-redux';
import 翻譯結果 from './翻譯結果';
import { 查詢語句 } from '../../actions';

const matchStateToProps = (state) => ({
  腔口: '閩南語',
  正在查詢: state.查詢.正在查詢,
  查詢結果: state.查詢.查詢結果,
});

const Container翻譯結果 = connect(
  matchStateToProps
)(翻譯結果);

export default Container翻譯結果;
