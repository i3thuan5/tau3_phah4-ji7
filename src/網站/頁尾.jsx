
import React from 'react';
import { Link } from 'react-router';

export default class ToLam extends React.Component {
  render () {
    return (
      <footer className='app footer inverted'>
        <ul className='ui menu container inverted'>
          <li className='item'>
            <a href='https://xn--v0qr21b.xn--kpry57d/'>意傳文化科技</a>
          </li>
          <li className='item'>
            <a href='http://docs.tai5uan5gian5gi2hok8bu7.apiary.io/'>服務API</a>
          </li>
          <li className='item'>
            <a href='https://github.com/sih4sing5hong5/tau3_phah4-ji7'>前端網站程式碼</a>
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
