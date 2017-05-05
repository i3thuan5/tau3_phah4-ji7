import React from "react";
import PropTypes from "prop-types";

const 點複製 = (內容) => {
  const textField = document.createElement("textarea");
  textField.innerText = 內容;
  document.body.appendChild(textField);
  textField.select();
  document.execCommand("copy");
  textField.remove();
};

const 複製鈕 = ({ 複製內容, title }) => (
    <button className="ui button"
      onClick={點複製.bind(this, 複製內容)}>
      <i className="icon-docs"></i>
      {title}
    </button>
  );

複製鈕.propTypes = {
  複製內容: PropTypes.string,
  title: PropTypes.string,
};

export default 複製鈕;
