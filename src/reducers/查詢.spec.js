import { expect } from 'chai';
import 查詢 from './查詢';

describe('Reducer', () => {
  it('has initial state', ()=> {
    expect(查詢(undefined, {}))
    .to
    .eql({
      語句: undefined,
      正在查詢: false,
      查詢結果: {},
    });
  });

  it('recognizes action REQUEST_HANLO', ()=> {
    expect(查詢(undefined, {
      type: 'REQUEST_HANLO',
      語句: 'sui2',
    }))
    .to
    .eql({
      語句: 'sui2',
      正在查詢: true,
      查詢結果: {},
    });
  });

  it('recognizes action RECIEVE_HANLO', ()=> {
    expect(查詢(undefined, {
      type: 'RECIEVE_HANLO',
      語句: '逐家',
      查詢結果: {
        '分詞': '逐-家｜tak8-ke1',
        '綜合標音': [{
          '分詞': '逐-家｜tak8-ke1',
          '臺羅閏號調': 'Ta̍k-ke',
          '通用數字調': 'Dak6-ge1',
          '吳守禮方音': 'ㄉㄚ㆐ㆶ-ㄍㆤ',
          '漢字': '逐家',
          '臺羅數字調': 'Tak8-ke1',
        }, ],
      },
    }))
    .to
    .eql({
      語句: '逐家',
      正在查詢: false,
      查詢結果: {
        '分詞': '逐-家｜tak8-ke1',
        '綜合標音': [{
          '分詞': '逐-家｜tak8-ke1',
          '臺羅閏號調': 'Ta̍k-ke',
          '通用數字調': 'Dak6-ge1',
          '吳守禮方音': 'ㄉㄚ㆐ㆶ-ㄍㆤ',
          '漢字': '逐家',
          '臺羅數字調': 'Tak8-ke1',
        }, ],
      },
    });
  });

  it('ignores other action', ()=> {
    expect(查詢(undefined, { type: 'HELLO_WORLD' }))
    .to
    .eql({
      語句: undefined,
      正在查詢: false,
      查詢結果: {},
    });
  });
});
