import React from "react";
import PropTypes from "prop-types";
import "./漢羅詞.css";

const 漢羅詞 = ({ 漢字詞, 臺羅閏號調 }) => (
  <ruby className="app ruby">
    {臺羅閏號調}
    <rt>{漢字詞}</rt>
  </ruby>
);


漢羅詞.propTypes = {
  漢字詞: PropTypes.string.isRequired,
  臺羅閏號調: PropTypes.string.isRequired,
};

export default 漢羅詞;
