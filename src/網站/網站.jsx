import React from 'react';
import 頁頭 from './頁頭';
import 頁尾 from './頁尾';

import Debug from 'debug';
var debug = Debug('tau3:網站');

export default class 網站 extends React.Component {

  跳到語句 (語句) {
    //'%E8%AC%9B' == '講'
    this.props.history.replace('/%E8%AC%9B/' +  encodeURI(語句));
  }

  render () {
    return (
        <div className='app background'>
          <頁頭/>
          {
            React.cloneElement(
              this.props.children,
              {
                跳到語句: this.跳到語句.bind(this),
              }
            )
          }
          <頁尾/>
        </div>
      );
  }
}

