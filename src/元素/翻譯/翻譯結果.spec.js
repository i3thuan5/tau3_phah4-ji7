import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import 翻譯結果 from './翻譯結果';

let setup = (腔口='閩南語', 正在查詢=false, 查詢結果={}) => {
  const component = shallow(
    <翻譯結果 腔口={腔口}
      正在查詢={正在查詢}
      查詢結果={查詢結果}/>
    );
  return {
    component: component,
    h2: component.find('h2'),
  };
};

describe('元素', ()=> {
  describe('翻譯結果', ()=> {
    it('shows error info', ()=> {
      const { h2 } = setup('閩南語', false, {
        '發生錯誤': true,
        '分詞': '',
        '綜合標音': [],
      });
      expect(h2).to.have.length(1);
      expect(h2.text()).match(/^主機發生錯誤/);
    });
  });
});
