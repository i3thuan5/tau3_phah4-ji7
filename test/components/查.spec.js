import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import 查 from '../../src/頁/查/查';

let setup = (語句='', 正在查詢=false) => {
  const component = shallow(
    <查 語句={語句}
      正在查詢={正在查詢}/>
    );
  return {
    component: component,
    button: component.find('button'),
  };
};

describe('元素', ()=> {
  describe('查', ()=> {
    it('搜尋中鎖住按鈕', ()=> {
      const { button } = setup('逐家tsò-hué來chhit4-tho5！', true);
      expect(button.hasClass('disabled')).to.be.true;
    });
  });
});
