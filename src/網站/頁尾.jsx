
import React from 'react';
import { Link } from 'react-router';

export default class ToLam extends React.Component {
  render () {
    const sites = [{
      title: 'Facebook',
      url: 'https://www.facebook.com/i3thuan5//',
    },
    {
      title: 'Github',
      url: 'https://xn--v0qr21b.xn--kpry57d/',
    },
    {
      title: '意傳文化科技',
      url: 'https://xn--v0qr21b.xn--kpry57d/',
    },
    {
      title: '語料來源',
      url: 'https://github.com/sih4sing5hong5/tai5-uan5_gian5-gi2_hok8-bu7/wiki/Taiwanese-Corpus%E8%AA%9E%E6%96%99',
    },];

    const items = sites.map((item, i) =>
        <a key={i}
          className='item'
          target="_blank"
          href={item.url}
        >
        {item.title}
        </a>
      );
    return (
      <footer className='app footer inverted'>
        <div className='ui stackable menu container inverted'>
          {items}
        </div>
      </footer>
    );
  }
}
