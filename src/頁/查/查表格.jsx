import React from "react";
import { browserHistory } from "react-router";
import PropTypes from "prop-types";
import "./查.css";

const 更新網址 = (句) => {
  browserHistory.replace(`/%E8%AC%9B/${encodeURI(句)}`);
};

class 查表格 extends React.Component {
  componentDidMount() {
    const { 語句, requestSearch } = this.props;
    requestSearch(語句);
    更新網址(語句);
  }

  送出(e) {
    e.preventDefault();
    const tt = this.refs.tt;
    const { requestSearch } = this.props;
    requestSearch(tt.value);
    更新網址(tt.value);
  }

  render() {
    const { 語句, 正在查詢 } = this.props;
    return (
      <form className='ui form'
        onSubmit={this.送出.bind(this)}>
        <textarea defaultValue={語句}
          ref='tt'
          rows='3'/>
        <div className='app clearing'>
        <button type='submit'
          className={
          `ui huge primary right floated ${
          正在查詢 ? "disabled" : ""
          } button`}>GO</button>
        </div>
      </form>
    );
  }
}

查表格.propTypes = {
  語句: PropTypes.string.isRequired,
  正在查詢: PropTypes.bool.isRequired,
  requestSearch: PropTypes.func.isRequired,
};

export default 查表格;
