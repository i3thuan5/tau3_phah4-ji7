import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import 翻譯結果, { 計算複製內容 } from "../../src/元素/翻譯/翻譯結果";

const initArgv = {
  腔口: "閩南語",
  正在查詢: false,
  查詢結果: {
    綜合標音: [{
      漢字: "1",
      臺羅閏號調: "a",
    }],
  },
};
const setup = (argv = initArgv) => {
  const component = shallow(
    <翻譯結果 {...argv}/>,
    );
  return {
    component,
    header: component.find(".header"),
  };
};

describe("元素", () => {
  describe("翻譯結果", () => {
    it("shows error info", () => {
      const { header } = setup({
        ...initArgv,
        查詢結果: {
          ...initArgv.查詢結果,
          發生錯誤: true,
        },
      });
      expect(header).to.have.length(1);
      expect(header.text()).match(/^主機發生錯誤/);
    });
  });
  it("計算複製內容", () => {
    const 綜合標音 = [{
      漢字: "1",
      臺羅閏號調: "a",
    }];
    const expectResult = {
      漢字: "1",
      臺羅: "a",
      漢字臺羅: "1\na",
    };
    expect(計算複製內容(綜合標音)).to.eql(expectResult);
  });
  it("計算空複製內容", () => {
    const 綜合標音 = [];
    const expectResult = [];
    expect(計算複製內容(綜合標音)).to.eql(expectResult);
  });
  it("計算多行複製內容", () => {
    const 綜合標音 = [{
      漢字: "1",
      臺羅閏號調: "a",
    }, {
      漢字: "2",
      臺羅閏號調: "b",
    }];
    const expectResult = {
      漢字: "1\n2",
      臺羅: "a\nb",
      漢字臺羅: "1\na\n2\nb",
    };
    expect(計算複製內容(綜合標音)).to.eql(expectResult);
  });
  it("移除漢字之間空白", () => {
    const 綜合標音 = [{
      漢字: "逐家 做伙 來𨑨迌 ！",
      臺羅閏號調: "Ta̍k-ke tsò-hué lâi-tshit-thô ！",
    }];
    const expectResult = {
      漢字: "逐家做伙來𨑨迌！",
      臺羅: "Ta̍k-ke tsò-hué lâi-tshit-thô ！",
      漢字臺羅: "逐家做伙來𨑨迌！\nTa̍k-ke tsò-hué lâi-tshit-thô ！",
    };
    expect(計算複製內容(綜合標音)).to.eql(expectResult);
  });
  it("移除多行漢字之間空白", () => {
    const 綜合標音 = [{
      漢字: "逐家 做伙 來𨑨迌 ！",
      臺羅閏號調: "Ta̍k-ke tsò-hué lâi-tshit-thô ！",
    }, {
      漢字: "逐家 做伙 來𨑨迌 ！",
      臺羅閏號調: "Ta̍k-ke tsò-hué lâi-tshit-thô ！",
    }];
    const expectResult = {
      漢字: "逐家做伙來𨑨迌！\n逐家做伙來𨑨迌！",
      臺羅: "Ta̍k-ke tsò-hué lâi-tshit-thô ！\nTa̍k-ke tsò-hué lâi-tshit-thô ！",
      漢字臺羅: "逐家做伙來𨑨迌！\nTa̍k-ke tsò-hué lâi-tshit-thô ！\n逐家做伙來𨑨迌！\nTa̍k-ke tsò-hué lâi-tshit-thô ！",
    };
    expect(計算複製內容(綜合標音)).to.eql(expectResult);
  });
});
