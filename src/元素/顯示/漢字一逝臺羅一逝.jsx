import React from 'react';
import superagent from 'superagent-bluebird-promise';
import Debug from 'debug';
import 合成結果 from '../合成/合成結果';

var debug = Debug('tau3:漢字一逝臺羅一逝');

export default class 漢字一逝臺羅一逝 extends React.Component {

  render () {
    let { 查詢結果 } = this.props;

    let 綜合標音 = 查詢結果.綜合標音.map(
      (綜音, i)=> (
        <table key={i}>
          <tbody>
            <tr>
              <td>
                <合成結果 後端網址={this.props.後端網址}
                  腔口={this.props.腔口}
                  語句={綜音.分詞}/>
              </td>
              <td>{綜音.漢字}</td>
            </tr>
            <tr>
              <td/>
              <td>{綜音.臺羅閏號調}</td>
            </tr>
          </tbody>
        </table>
      )
    );
    return (
        <div className='main'>
          {綜合標音}
        </div>
      );
  }
}

