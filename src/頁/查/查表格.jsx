import React from "react";
import PropTypes from "prop-types";
import { browserHistory } from "react-router";
import "semantic-ui-css/components/dropdown.min.css";
import config from "../../config";

export const 取得新網址 = (語句, 腔) => {
  if (config.全部腔口().length > 1) {
    return (
      `/%E8%AC%9B/${腔}/${encodeURI(語句)}`);
  }
  return (
    `/%E8%AC%9B/${encodeURI(語句)}`);
};

const 更新網址 = (語句, 腔) =>
  browserHistory.replace(取得新網址(語句, 腔));

class 查表格 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSelect: config.全部腔口().length > 1,
      menu: null,
    };
  }
  componentDidMount() {
    const { 語句, 腔, requestSearch } = this.props;
    requestSearch(語句, 腔);
    this.setState({ menu: this.getMenu() });
  }

  取得腔值() {
    const { 腔 } = this.props;
    return (this.refSelect) ?
      this.refSelect.value : 腔;
  }
  送出(e) {
    e.preventDefault();
    const tt = this.refText;
    const 腔值 = this.取得腔值();
    this.props.requestSearch(tt.value, 腔值);
    更新網址(tt.value, 腔值);
  }

  getMenu() {
    const { showSelect } = this.state;
    const { 腔 } = this.props;
    if (showSelect) {
      return (
        <select defaultValue={腔}
          ref={(c) => { this.refSelect = c; }}
          className="ui dropdown">
          {
            config.全部腔口().map((t, k) => (
              <option value={t} key={k}>{t}</option>
            ))
          }
        </select>
      );
    }
    return null;
  }

  render() {
    const { 語句, 正在查詢 } = this.props;
    const { menu } = this.state;
    return (
      <form className='ui form'
        onSubmit={this.送出.bind(this)}>

        {menu}

        <div className="app block">
          <textarea
            placeholder={語句}
            ref={(c) => { this.refText = c; }}
            rows='3'
            onKeyDown={(event) => {
              const allowedKeyCodes = [32, 39];
              if (allowedKeyCodes.includes(event.keyCode) && this.refText.value === "") {
                event.preventDefault(); // prevent space or right arrow from being added to text
                this.refText.value = this.refText.getAttribute('placeholder');
                this.refText.removeAttribute('placeholder');
              }
            }}
          />
        </div>

        <div className="app clearing">
          <button className={
            `ui huge primary right floated button ${
              正在查詢 ? "disabled" : ""}`}
          type='submit'
          >查</button>
        </div>

      </form>
    );
  }
}

查表格.propTypes = {
  語句: PropTypes.string.isRequired,
  腔: PropTypes.string.isRequired,
  正在查詢: PropTypes.bool.isRequired,
  requestSearch: PropTypes.func.isRequired,
};

export default 查表格;
