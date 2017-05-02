import React from "react";
import PropTypes from "prop-types";

const 漢羅詞 = ({ 漢字詞, 臺羅閏號調 }) => (
  <ruby>{漢字詞}
    <rt>{臺羅閏號調}</rt>
  </ruby>
);


漢羅詞.propTypes = {
  漢字詞: PropTypes.string.isRequired,
  臺羅閏號調: PropTypes.string.isRequired,
};

export default 漢羅詞;
