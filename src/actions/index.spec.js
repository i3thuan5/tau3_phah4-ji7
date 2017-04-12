import nock from 'nock';
import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  REQUEST_HANLO,
  RECIEVE_HANLO,
  RECIEVE_ERROR_HANLO
} from './action.type';
import { 查詢語句 } from './';
import { 後端網址, 標漢字音標 } from '../後端網址';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Action', () => {
  afterEach(()=> {
    nock.cleanAll();
  });

  it('creates RECIEVE_HANLO when fetching data is done', () => {
    nock(後端網址)
    .get('/' + 標漢字音標)
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

  it('creates only one RECIEVE_HANLO for long sentence', () => {
    nock(後端網址)
    .get('/' + 標漢字音標)
    .query({
      '查詢腔口': '閩南語',
      '查詢語句': '逐家！\n逐家',
    })
    .reply(200, {
      '分詞': '逐-家｜tak8-ke1！ 逐-家｜tak8-ke1',
      '綜合標音': [{
        '分詞': '逐-家｜tak8-ke1',
        '臺羅閏號調': 'Ta̍k-ke',
        '通用數字調': 'Dak6-ge1',
        '吳守禮方音': 'ㄉㄚ㆐ㆶ-ㄍㆤ',
        '漢字': '逐家',
        '臺羅數字調': 'Tak8-ke1',
      }, {
        '分詞': '逐-家｜tak8-ke1',
        '臺羅閏號調': 'Ta̍k-ke',
        '通用數字調': 'Dak6-ge1',
        '吳守禮方音': 'ㄉㄚ㆐ㆶ-ㄍㆤ',
        '漢字': '逐家',
        '臺羅數字調': 'Tak8-ke1',
      },],
    });

    const store = mockStore({
        '查詢結果': {},
      });

    const expectActions = [
      { type: REQUEST_HANLO, '語句': '逐家！\n逐家' },
      { type: RECIEVE_HANLO, '語句': '逐家！\n逐家',
        '查詢結果': {
          '分詞': '逐-家｜tak8-ke1！ 逐-家｜tak8-ke1',
          '綜合標音': [{
            '分詞': '逐-家｜tak8-ke1',
            '臺羅閏號調': 'Ta̍k-ke',
            '通用數字調': 'Dak6-ge1',
            '吳守禮方音': 'ㄉㄚ㆐ㆶ-ㄍㆤ',
            '漢字': '逐家',
            '臺羅數字調': 'Tak8-ke1',
          }, {
            '分詞': '逐-家｜tak8-ke1',
            '臺羅閏號調': 'Ta̍k-ke',
            '通用數字調': 'Dak6-ge1',
            '吳守禮方音': 'ㄉㄚ㆐ㆶ-ㄍㆤ',
            '漢字': '逐家',
            '臺羅數字調': 'Tak8-ke1',
          },],
        },
      }, ];

    return store.dispatch(查詢語句('逐家！\n逐家'))
      .then(()=> {
        expect(store.getActions()).to.eql(expectActions);
      });
  });

  it('catch 500 error', () => {
    nock(後端網址)
    .get('/' + 標漢字音標)
    .query({
      '查詢腔口': '閩南語',
      '查詢語句': '逐家',
    })
    .replyWithError('你糗了你！');

    const store = mockStore({
        '查詢結果': {},
      });

    const expectActions = [
      { type: REQUEST_HANLO, '語句': '逐家' },
      { type: RECIEVE_ERROR_HANLO, '語句': '逐家' }, ];

    return store.dispatch(查詢語句('逐家'))
      .then(()=> {
        expect(store.getActions()).to.eql(expectActions);
      });
  });
});
