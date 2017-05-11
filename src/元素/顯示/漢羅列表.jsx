import React from "react";
import PropTypes from "prop-types";
import 漢羅一逝 from "./漢羅一逝";

class 漢羅列表 extends React.Component {

  render() {
    const { 綜合標音 } = this.props;
    return (
      <div>
      {綜合標音.map((綜音, i) => (
        <漢羅一逝
          key={i}
          漢字={綜音.漢字}
          臺羅閏號調={綜音.臺羅閏號調}
          分詞={綜音.分詞}/>
      ))}
      </div>
    );
  }
}

漢羅列表.propTypes = {
  綜合標音: PropTypes.arrayOf(PropTypes.shape({
    臺羅閏號調: PropTypes.string.isRequired,
    漢字: PropTypes.string.isRequired,
    分詞: PropTypes.string.isRequired,
  })).isRequired,
};

export default 漢羅列表;
