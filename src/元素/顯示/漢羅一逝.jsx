import React from "react";
import PropTypes from "prop-types";
import { HanLoSu, PlayButton } from "demo-ui";

class 漢羅一逝 extends React.Component {

  render() {
    const { 綜合標音 } = this.props;

    const 漢羅逝 = 綜合標音.map(
      (綜音, i) => {
        const 漢字陣列 = 綜音.漢字.split(" ");
        const 臺羅陣列 = 綜音.臺羅閏號調.split(" ");
        const 標音陣列 = 漢字陣列.map((漢字, k) => (
            <HanLoSu key={k}
            漢字={漢字}
            臺羅閏號調={臺羅陣列[k]} />
        ));
        return (
        <div key={i} className='app block'>
          <PlayButton 語句={綜音.分詞}/>
          {標音陣列}
        </div>
        );
      });
    return (
        <div>
          {漢羅逝}
        </div>
    );
    return null;
  }
}

漢羅一逝.propTypes = {
  綜合標音: PropTypes.array.isRequired,
};

export default 漢羅一逝;
