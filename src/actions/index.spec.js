import nock from 'nock';
import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  REQUEST_HANLO,
  RECIEVE_HANLO
} from './action.type';
import { 查詢語句 } from './';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Action', () => {

  afterEach(()=> {
    nock.cleanAll();
  });

  it('creates RECIEVE_HANLO when fetching data is done', () => {
    nock('http://140.109.16.144/')
    .get('/標漢字音標')
    .query({
      '查詢腔口': '閩南語',
      '查詢語句': '逐家tsò-hué來chhit4-tho5！',
    })
    .reply(200, {
      '分詞': '逐-家｜tak8-ke1 做-伙｜tso3-hue2 來-𨑨-迌｜lai5-tshit4-tho5 ！',
      '綜合標音': [{
        '分詞': '逐-家｜tak8-ke1 做-伙｜tso3-hue2 來-𨑨-迌｜lai5-tshit4-tho5 ！',
        '臺羅閏號調': 'Ta̍k-ke tsò-hué lâi-tshit-thô ！',
        '通用數字調': 'Dak6-ge1 zor3-hue4 lai5-cit7-tor5 ！',
        '吳守禮方音': 'ㄉㄚ㆐ㆶ-ㄍㆤ ㄗㄜ˪-ㄏㄨㆤˋ ㄌㄞˊ-ㄑㄧㆵ-ㄊㄜˊ ！',
        '漢字': '逐家 做伙 來𨑨迌 ！',
        '臺羅數字調': 'Tak8-ke1 tso3-hue2 lai5-tshit4-tho5 ！',
      },],
    });

    const store = mockStore({
        '查詢結果': {},
      });

    const expectActions = [
      { type: REQUEST_HANLO, '語句': '逐家tsò-hué來chhit4-tho5！' },
      { type: RECIEVE_HANLO, '語句': '逐家tsò-hué來chhit4-tho5！',
        '查詢結果': {
          '分詞': '逐-家｜tak8-ke1 做-伙｜tso3-hue2 來-𨑨-迌｜lai5-tshit4-tho5 ！',
          '綜合標音': [{
            '分詞': '逐-家｜tak8-ke1 做-伙｜tso3-hue2 來-𨑨-迌｜lai5-tshit4-tho5 ！',
            '臺羅閏號調': 'Ta̍k-ke tsò-hué lâi-tshit-thô ！',
            '通用數字調': 'Dak6-ge1 zor3-hue4 lai5-cit7-tor5 ！',
            '吳守禮方音': 'ㄉㄚ㆐ㆶ-ㄍㆤ ㄗㄜ˪-ㄏㄨㆤˋ ㄌㄞˊ-ㄑㄧㆵ-ㄊㄜˊ ！',
            '漢字': '逐家 做伙 來𨑨迌 ！',
            '臺羅數字調': 'Tak8-ke1 tso3-hue2 lai5-tshit4-tho5 ！',
          },],
        }, },
    ];

    return store.dispatch(查詢語句('逐家tsò-hué來chhit4-tho5！'))
      .then(()=> {
        expect(store.getActions()).to.eql(expectActions);
      });
  });
});
