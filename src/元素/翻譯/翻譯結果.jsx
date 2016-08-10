import React from 'react';
import superagent from 'superagent-bluebird-promise';
import Debug from 'debug';
import 合成結果 from '../合成/合成結果';

var debug = Debug('sia2:翻譯結果');

export default class 翻譯結果 extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      頂一句語句: undefined,
    };
  }

  componentWillMount () {
    this.掠仔 = setInterval(this. 掠.bind(this), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.掠仔);
  }

  掠()
  {
    let { 後端網址, 腔口, 語句 } = this.props;
    let { 頂一句語句 } = this.state;
    if (語句 != 頂一句語句)
    {
      superagent.get(後端網址 + '%E6%AD%A3%E8%A6%8F%E5%8C%96%E7%BF%BB%E8%AD%AF')
        .query({
            '查詢腔口': 腔口,
            '查詢語句': 語句,
          })
        .then(({ body }) => (this.setState({
          查詢結果:  {
            '查詢語句': 語句,
            '翻譯正規化結果': body.翻譯正規化結果,
            '綜合標音': body.綜合標音,
          },
          頂一句語句: 語句,
        })))
        .catch((err) => (this.setState({
          查詢結果:  {
            '查詢語句': 語句,
            '翻譯正規化結果': '發生錯誤',
            '綜合標音': [],
            '內容': err,
          },
          頂一句語句: 語句,
        })));
    }
  }

  顯示合成結果(查詢結果)
  {
    return (
      <合成結果 後端網址={this.props.後端網址}
        腔口={this.props.腔口}
        語句={查詢結果.翻譯正規化結果}/>
    );
  }

  render () {
    let { 查詢結果 } = this.state;
    if (!查詢結果)
    {
      return (
        <div className='main'>
          <h3>載入中……</h3>
        </div>
      );
    }

    let 綜合標音 = 查詢結果.綜合標音.map(
      (綜音, i)=> {
        let 漢字陣列 = 綜音.漢字.split(' ');
        let 臺羅陣列 = 綜音.臺羅閏號調.split(' ');
        let 標音 = 漢字陣列.map(
          (漢字, 第幾个)=>(<ruby key={第幾个}>{漢字}<rt>{臺羅陣列[第幾个]}</rt></ruby>)
        );
        return (
          <div key={i}>
            {標音}
          </div>
        );
      }
    );
    return (
        <div className='main'>
          <div id='輸出'>
            {this.顯示合成結果(查詢結果)}
            {綜合標音}
          </div>
        </div>
      );
  }
}

