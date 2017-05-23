import React from "react";
import PropTypes from "prop-types";
import { HanLoTsua, 意傳服務 } from "demo-ui";

class 漢羅列表 extends React.Component {

  render() {
    const { 綜合標音, 腔口 } = this.props;
    let src;
    return (
      <div>
      {綜合標音.map((綜音, i) => {
        src = 意傳服務.語音合成({
          腔口,
          分詞: 綜音.分詞,
        });
        console.log(src);
        return (
        <HanLoTsua
          key={i}
          src={src}
          漢字={綜音.漢字}
          臺羅閏號調={綜音.臺羅閏號調}/>);
      })}
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
  腔口: PropTypes.string.isRequired,
};

export default 漢羅列表;
