import { connect } from 'react-redux';
import 查 from './查';
import { 查詢語句 } from '../../actions';

const matchStateToProps = (state) => ({
  語句: state.查詢.語句,
  正在查詢: state.查詢.正在查詢,
  查詢結果: state.查詢.查詢結果,
});

const matchDispatchToProps = (dispatch) => {
  return {
    requestSearch: (語句) => {dispatch(查詢語句(語句));},
  };
};

const Container查詢 = connect(
  matchStateToProps,
  matchDispatchToProps
)(查);

export default Container查詢;
