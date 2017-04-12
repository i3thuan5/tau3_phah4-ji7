import React from 'react';
import { browserHistory } from 'react-router';
import Debug from 'debug';
import Container翻譯結果 from '../../元素/翻譯/翻譯結果.container';
import './查.css';

var debug = Debug('tau3:查');

export default class 查 extends React.Component {

  componentDidMount() {
    let { 語句, requestSearch } = this.props;
    requestSearch(語句);
    this.更新網址(語句);
  }

  送出 (e) {
    e.preventDefault();
    let tt = this.refs.tt;
    let { requestSearch } = this.props;
    requestSearch(tt.value);
    this.更新網址(tt.value);
  }

  更新網址(語句) {
    browserHistory.replace('/%E8%AC%9B/' +  encodeURI(語句));
  }

  render () {
    let { 語句, 正在查詢 } = this.props;
    return (
      <div className='main container'>
        <form onSubmit={this.送出.bind(this)}>
          <textarea defaultValue={語句} ref='tt' />
          <button className={
            'ui huge primary right floated ' +
            (正在查詢 ? 'disabled' : '') +
            ' button'}
            type='submit'
          >GO</button>
        </form>
        <br/>
        <Container翻譯結果/>
      </div>
    );
  }
}
