import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import 漢羅一逝 from "../../src/元素/顯示/漢羅一逝";
import 漢羅列表 from "../../src/元素/顯示/漢羅列表";

const setup = (綜合標音 = []) => {
  const component = shallow(
    <漢羅列表 綜合標音={綜合標音}/>,
    );
  return {
    component,
    漢羅逝: component.find(漢羅一逝),
  };
};

describe("Component", () => {
  describe("漢羅列表", () => {
    it("renders 1 漢羅一逝", () => {
      const { 漢羅逝 } = setup([{
        臺羅閏號調: "Ta̍k-ke",
        漢字: "逐家",
        分詞: "",
      }]);
      expect(漢羅逝).to.have.length(1);
    });
    it("renders 1 漢羅一逝 with space", () => {
      const { 漢羅逝 } = setup([{
        臺羅閏號調: "Ta̍k-ke tsò-hué lâi-tshit-thô ！",
        漢字: "逐家 做伙 來𨑨迌 ！",
        分詞: "",
      }]);
      expect(漢羅逝).to.have.length(1);
    });
    it("renders 2 漢羅一逝", () => {
      const { 漢羅逝 } = setup([{
        臺羅閏號調: "Ta̍k-ke",
        漢字: "逐家",
        分詞: "",
      }, {
        臺羅閏號調: "tsò-hué",
        漢字: "做伙",
        分詞: "",
      }]);
      expect(漢羅逝).to.have.length(2);
    });
    it("passes props to 漢羅一逝", () => {
      const { 漢羅逝 } = setup([{
        臺羅閏號調: "Ta̍k-ke tsò-hué lâi-tshit-thô ！",
        漢字: "逐家",
        分詞: "sui2",
      }]);
      expect(漢羅逝.props()).to.eql({
        臺羅閏號調: "Ta̍k-ke tsò-hué lâi-tshit-thô ！",
        漢字: "逐家",
        分詞: "sui2",
      });
    });
    it("renders none", () => {
      const { 漢羅逝 } = setup([]);
      expect(漢羅逝).to.have.length(0);
    });
  });
});
