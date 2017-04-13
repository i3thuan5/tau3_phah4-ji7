import React from 'react';
import PropTypes from 'prop-types';
import Debug from 'debug';
import 合成結果 from '../合成/合成結果';

var debug = Debug('tau3:顯示');

class 顯示 extends React.Component {
  render () {
    let { 查詢結果, 選項 } = this.props;
    let 綜合標音 = 查詢結果.綜合標音 || [];
    選項 = 選項 || '分詞';

    let 顯示標音 = 綜合標音.map(
      (綜音, i)=> (
        <div key={i}>
          <合成結果 語句={綜音.分詞}/>
          <span>{綜音[選項]}</span>
        </div>
      )
    );
    return (
        <div className='main'>
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
