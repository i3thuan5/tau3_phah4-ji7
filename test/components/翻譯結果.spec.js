import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import 翻譯結果 from '../../src/元素/翻譯/翻譯結果';

let setup = (腔口='閩南語', 正在查詢=false, 查詢結果={}) => {
  const component = shallow(
    <翻譯結果 腔口={腔口}
      正在查詢={正在查詢}
      查詢結果={查詢結果}/>
    );
  return {
    component: component,
    header: component.find('.header'),
  };
};

describe('元素', ()=> {
  describe('翻譯結果', ()=> {
    it('shows error info', ()=> {
      const { header } = setup('閩南語', false, {
        '發生錯誤': true,
        '分詞': '',
        '綜合標音': [],
      });
      expect(header).to.have.length(1);
      expect(header.text()).match(/^主機發生錯誤/);
    });
  });
});
