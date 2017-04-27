import React from "react";
import PropTypes from "prop-types";
import { 後端網址, 語音合成 } from "../../後端網址";
import "../../../fonts/fontello.css";

class 合成結果 extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.語句 === this.props.語句) return;
    const 音檔 = this.refs.合成音檔;
    音檔.load();
  }

  play() {
    const 音檔 = this.refs.合成音檔;
    音檔.play();
  }

  render() {
    return (
        <span className='HuatIm'>
          <audio ref="合成音檔">
            <source type="audio/wav"
               src={後端網址 + 語音合成 + this.props.語句}/>
          </audio>
          <button onClick={this.play.bind(this)}
            className='ui compact icon massive button'>
            <i className='icon-play'></i>
          </button>
        </span>
    );
  }
}


合成結果.propTypes = {
  語句: PropTypes.string.isRequired,
};

export default 合成結果;
