import React from "react";
import PropTypes from "prop-types";
import 合成結果 from "../合成/合成結果";
import 漢羅詞 from "./漢羅詞";
import "./漢字一逝臺羅一逝.css";

class 漢字一逝臺羅一逝 extends React.Component {

  render() {
    const { 腔口, 查詢結果 } = this.props;

    const 綜合標音 = 查詢結果.綜合標音.map(
      (綜音, i) => {
        const 漢字陣列 = 綜音.漢字.split(" ");
        const 臺羅陣列 = 綜音.臺羅閏號調.split(" ");
        const 標音陣列 = 漢字陣列.map((漢字, k) => (
            <漢羅詞 key={k}
            漢字詞={漢字}
            臺羅閏號調={臺羅陣列[k]} />
        ));
        return (
        <div key={i} className='app block'>
          <合成結果 腔口={腔口} 語句={綜音.分詞}/>
          {標音陣列}
        </div>
        );
      });
    return (
        <div>
          {綜合標音}
        </div>
    );
  }
}

漢字一逝臺羅一逝.propTypes = {
  查詢結果: PropTypes.shape({
    綜合標音: PropTypes.array.isRequired,
  }).isRequired,
  腔口: PropTypes.string.isRequired,
};

export default 漢字一逝臺羅一逝;
