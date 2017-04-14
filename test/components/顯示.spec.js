import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import 顯示 from '../../src/元素/顯示/顯示';

let setup = (選項='分詞', 查詢結果={}) => {
  const component = shallow(
    <顯示 選項={選項} 查詢結果={查詢結果}/>
    );
  return {
    component: component,
    span: component.find('span'),
  };
};

describe('Component', () => {
  describe('顯示', () => {
    it('should render 漢字', () => {
      const { span } = setup('漢字',
      {
        '分詞': '逐-家｜tak8-ke1',
        '綜合標音': [{
          '分詞': '逐-家｜tak8-ke1',
          '臺羅閏號調': 'Ta̍k-ke',
          '通用數字調': 'Dak6-ge1',
          '吳守禮方音': 'ㄉㄚ㆐ㆶ-ㄍㆤ',
          '漢字': '逐家',
          '臺羅數字調': 'Tak8-ke1',
        }, ],
      });
      expect(span.text()).match(/^逐家/);
    });
  });
});
