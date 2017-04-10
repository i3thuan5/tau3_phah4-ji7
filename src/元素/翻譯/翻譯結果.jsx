import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import superagent from 'superagent-bluebird-promise';
import Debug from 'debug';
import 漢字一逝臺羅一逝 from '../顯示/漢字一逝臺羅一逝';
import 漢字 from '../顯示/漢字';
import 臺羅 from '../顯示/臺羅';
import 分詞 from '../顯示/分詞';
import { 後端網址 } from '../../後端網址';

var debug = Debug('tau3:標漢字音標結果');

export default class 翻譯結果 extends React.Component {
  render () {
    let { 腔口, 正在查詢, 查詢結果 } = this.props;
    if (正在查詢)
    {
      return (
        <div className='main'>
          <h3>載入中……</h3>
        </div>
      );
    }

    return (
        <div className='main'>
          <Tabs selectedIndex={0}>
            <TabList>
              <Tab>漢字+臺羅</Tab>
              <Tab>漢字</Tab>
              <Tab>臺羅</Tab>
              <Tab>分詞</Tab>
            </TabList>
            <TabPanel>
                <漢字一逝臺羅一逝
                  後端網址={this.props.後端網址}
                  腔口={this.props.腔口}
                  查詢結果={查詢結果}/>
            </TabPanel>
            <TabPanel>
                <漢字
                  後端網址={this.props.後端網址}
                  腔口={this.props.腔口}
                  查詢結果={查詢結果}/>
            </TabPanel>
            <TabPanel>
                <臺羅
                  後端網址={this.props.後端網址}
                  腔口={this.props.腔口}
                  查詢結果={查詢結果}/>
            </TabPanel>
            <TabPanel>
                <分詞
                  後端網址={this.props.後端網址}
                  腔口={this.props.腔口}
                  查詢結果={查詢結果}/>
            </TabPanel>
          </Tabs>
        </div>
      );
  }
}

