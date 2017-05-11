import React from "react";
import PropTypes from "prop-types";
import { HanLoSu, PlayButton } from "demo-ui";

class 漢羅一逝 extends React.Component {

  render() {
    const { 臺羅閏號調, 漢字, 分詞 } = this.props;
    const 漢字陣列 = 漢字.split(" ");
    const 臺羅陣列 = 臺羅閏號調.split(" ");
    const 詞陣列 = 漢字陣列.map((字, k) => (
        <HanLoSu key={k}
        漢字={字}
        臺羅閏號調={臺羅陣列[k]} />
    ));
    return (
      <div className='app block'>
        <PlayButton 語句={分詞}/>
        {詞陣列}
      </div>
    );
  }
}

漢羅一逝.propTypes = {
  臺羅閏號調: PropTypes.string.isRequired,
  漢字: PropTypes.string.isRequired,
  分詞: PropTypes.string.isRequired,
};

export default 漢羅一逝;
