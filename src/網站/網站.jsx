import React from 'react';
import 頁頭 from './頁頭';
import 頁尾 from './頁尾';

import Debug from 'debug';
var debug = Debug('tau3:網站');

export default class 網站 extends React.Component {

  render () {
    let { ku } = this.props.params;

    return (
        <div className='app background'>
          <頁頭/>
          {
            React.cloneElement(
              this.props.children,
              {
                語句: ku || '逐家tsò-hué來chhit4-tho5！',
              }
            )
          }
          <頁尾/>
        </div>
      );
  }
}

