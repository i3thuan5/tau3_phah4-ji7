
import React from 'react';
import Debug from 'debug';

var debug = Debug('tau3:合成結果');

export default class 合成結果 extends React.Component {

  componentWillReceiveProps (nextProps) {
    if (nextProps.後端網址 === this.props.後端網址 &&
      nextProps.腔口 === this.props.腔口 &&
      nextProps.語句 === this.props.語句) return;
    let 音檔 = this.refs.合成音檔;
    音檔.load();
  }

  play() {
    let 音檔 = this.refs.合成音檔;
    音檔.play();
  }

  render () {
    return (
        <div className='HuatIm'>
          <audio ref="合成音檔">
            <source type="audio/wav"
               src={this.props.後端網址
                 + '語音合成?查詢腔口=' + this.props.腔口
                 + '&查詢語句=' + this.props.語句}/>
          </audio>
          <button onClick={this.play.bind(this)}
            className='ui compact icon massive button'>
            <i className='icon play'></i>
          </button>
        </div>
      );
  }
}
