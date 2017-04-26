import React from "react";
import PropTypes from "prop-types";
import 合成結果 from "../合成/合成結果";

class 顯示 extends React.Component {
  render() {
    const { 查詢結果, 選項 } = this.props;
    const 綜合標音 = 查詢結果.綜合標音 || [];
    const 選 = 選項 || "分詞";

    const 顯示標音 = 綜合標音.map(
      (綜音, i) => (
        <div key={i} className='app block'>
          <合成結果 語句={綜音.分詞}/>
          <span>{綜音[選]}</span>
        </div>
      ),
    );
    return (
        <div>
          {顯示標音}
        </div>
    );
  }
}

顯示.propTypes = {
  查詢結果: PropTypes.shape({
    綜合標音: PropTypes.array.isRequired,
  }).isRequired,
  選項: PropTypes.string,
};

export default 顯示;
