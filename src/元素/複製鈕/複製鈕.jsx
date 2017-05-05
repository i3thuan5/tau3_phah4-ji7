import React from "react";
import PropTypes from "prop-types";

class 複製鈕 extends React.Component {
  點複製() {
    const { 複製內容 } = this.props;
    const textField = document.createElement("textarea");
    textField.innerText = 複製內容;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  }

  render() {
    const { title } = this.props;
    return (
      <button className="ui button"
        onClick={this.點複製.bind(this)}>
        <i className="icon-docs"></i>
        {title}
      </button>
    );
  }
}

複製鈕.propTypes = {
  複製內容: PropTypes.string,
  title: PropTypes.string,
};

export default 複製鈕;
