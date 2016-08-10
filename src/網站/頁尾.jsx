
import React from 'react';
import { Link } from 'react-router';

export default class ToLam extends React.Component {
  render () {
    return (
      <footer className='app footer inverted'>
        <ul className='ui menu container inverted'>
          <li className='item'>
            <a href='https://g0v.hackpad.com/f4rSgcFTIzz'>我想幫忙</a>
          </li>
          <li className='item'>
            <a href='http://xn--jny.xn--v0qr21b.xn--kpry57d/'>相關專案</a>
          </li>
          <li className='item'>
            <a href='http://docs.tai5uan5gian5gi2hok8bu7.apiary.io/'>服務API</a>
          </li>
          <li className='item'>
            <a href='https://github.com/sih4sing5hong5/sia2_siann2-mih4'>前端網站程式碼</a>
          </li>
          <li className='item'>
            <a href='https://github.com/sih4sing5hong5/tai5-uan5_gian5-gi2_hok8-bu7/wiki'>後端服務程式碼</a>
          </li>
          <li className='item'>
            <a href='https://github.com/sih4sing5hong5/tai5-uan5_gian5-gi2_hok8-bu7/wiki/Taiwanese-Corpus%E8%AA%9E%E6%96%99'>語料來源</a>
          </li>
        </ul>
      </footer>
    );
  }
}
