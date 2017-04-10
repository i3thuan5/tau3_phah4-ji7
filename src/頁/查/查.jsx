import React from 'react';
// import superagent from 'superagent-bluebird-promise';
import Debug from 'debug';
import Container翻譯結果 from '../../元素/翻譯/翻譯結果.container';
import './查.css';

var debug = Debug('tau3:查');

export default class 查 extends React.Component {

  componentDidMount() {
    debug(this.props);
    let { 語句, requestSearch } = this.props;
    requestSearch(語句);
  }

  跳到語句 (e) {
    e.preventDefault();
    let tt = this.refs.tt;
    let { requestSearch } = this.props;
    requestSearch(tt.value);
  }

  render () {
    let { 語句 } = this.props;
    return (
      <div className='main container'>
        <form onSubmit={this.跳到語句.bind(this)}>
          <textarea defaultValue={語句} ref='tt' />
          <button className='ui primary button'
            type='submit'>GO</button>
        </form>
        <br/>
        <Container翻譯結果/>
      </div>
    );
  }
}
