import { connect } from 'react-redux';
import 查 from './頁/查/查';
import { 查詢語句 } from '../actions';

const matchStateToProps = (state) => ({
  語句: state.語句,
  正在查詢: state.正在查詢,
  查詢結果: state.查詢結果,
});

const matchDispatchToProps = (dispatch) => {
  return {
    requestSearch: (語句) => {dispatch(查詢語句(語句));},
  };
};

const Container查詢 = connect(
  matchStateToProps,
  )(查);

export default Container查詢;
