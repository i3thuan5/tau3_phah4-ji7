import React from 'react';
import superagent from 'superagent-bluebird-promise';
import Debug from 'debug';
import 合成結果 from '../合成/合成結果';

var debug = Debug('tau3:標漢字音標結果');

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
      superagent.get(後端網址 + '標漢字音標')
        .query({
            '查詢腔口': 腔口,
            '查詢語句': 語句.trim(),
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
      (綜音, i)=> (
        <div key={i}>
          <合成結果 後端網址={this.props.後端網址}
            腔口={this.props.腔口}
            語句={綜音.分詞}/>
          {綜音.漢字}<br/>
          {綜音.臺羅閏號調}
        </div>
      )
    );
    return (
        <div className='main'>
          <div id='輸出'>
            {綜合標音}
          </div>
        </div>
      );
  }
}

