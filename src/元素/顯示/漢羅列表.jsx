import React from "react";
import PropTypes from "prop-types";
import { PlayButton, DownloadButton } from "demo-ui";

class 漢羅列表 extends React.Component {
  render() {
    const { 綜合標音 } = this.props;
    let src;
    return (
      <div>
        {綜合標音.map((綜音, i) => {
          src = (
            encodeURI("https://hapsing.ithuan.tw/bangtsam?taibun=") +
          encodeURIComponent(綜音.KIP)
          );
          return (
            <div key={i}>
              <PlayButton src={src}/>
              <DownloadButton src={src}/>
              <ruby className="app ruby">
                {綜音.漢字}
                <rt>{綜音.KIP}</rt>
              </ruby>
            </div>
          );
        // return (
        // <HanLoTsua
        //   key={i}
        //   src={src}
        //   漢字={綜音.漢字}
        //   羅馬字={綜音.KIP}/>
        // );
        })}
      </div>
    );
  }
}

漢羅列表.propTypes = {
  結果腔口: PropTypes.string.isRequired,
  綜合標音: PropTypes.arrayOf(PropTypes.shape({
    KIP: PropTypes.string.isRequired,
    漢字: PropTypes.string.isRequired,
    分詞: PropTypes.string.isRequired,
  })).isRequired,
};

export default 漢羅列表;
