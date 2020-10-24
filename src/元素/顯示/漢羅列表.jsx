import React from "react";
import PropTypes from "prop-types";
import { HanLoTsua, 意傳服務 } from "demo-ui";

class 漢羅列表 extends React.Component {

  render() {
    const { 結果腔口, 綜合標音 } = this.props;
    let src;
    return (
      <div>
      {綜合標音.map((綜音, i) => {
        src = 意傳服務.語音合成({
          腔口: 結果腔口,
          分詞: 綜音.分詞,
        });
        return (
        <HanLoTsua
          key={i}
          src={src}
          漢字={綜音.漢字}
          羅馬字={綜音.羅馬字}/>
        );
      })}
      </div>
    );
  }
}

漢羅列表.propTypes = {
  結果腔口: PropTypes.string.isRequired,
  綜合標音: PropTypes.arrayOf(PropTypes.shape({
    羅馬字: PropTypes.string.isRequired,
    漢字: PropTypes.string.isRequired,
    分詞: PropTypes.string.isRequired,
  })).isRequired,
};

export default 漢羅列表;
