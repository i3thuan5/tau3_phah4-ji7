import React from "react";
import PropTypes from "prop-types";

const 複製鈕 = ({ copyOnClick, title, 複製內容 }) => (
    <button className="ui button"
      onClick={copyOnClick}>
      <i className="icon-play"></i>
      {title}
    </button>
  );

複製鈕.propTypes = {
  copyOnClick: PropTypes.func,
  title: PropTypes.string,
  複製內容: PropTypes.string,
};

export default 複製鈕;
