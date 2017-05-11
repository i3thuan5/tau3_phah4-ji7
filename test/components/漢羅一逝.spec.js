import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import { HanLoSu, PlayButton } from "demo-ui";
import 漢羅一逝 from "../../src/元素/顯示/漢羅一逝";

const setup = (綜合標音 = []) => {
  const component = shallow(
    <漢羅一逝 綜合標音={綜合標音}/>,
    );
  return {
    component,
    block: component.find(".block"),
    hanlosu: component.find(HanLoSu),
  };
};

describe("Component", () => {
  describe("漢羅一逝", () => {
    it("renders 1 HanLoSu", () => {
      const { block } = setup([{
        臺羅閏號調: "Ta̍k-ke",
        漢字: "逐家",
        語句: "",
      }]);
      expect(block.children(HanLoSu)).to.have.length(1);
    });
    it("renders HanLoSu in a line", () => {
      const { block } = setup([{
        臺羅閏號調: "Ta̍k-ke tsò-hué lâi-tshit-thô ！",
        漢字: "逐家 做伙 來𨑨迌 ！",
        語句: "",
      }]);
      expect(block.children(HanLoSu)).to.have.length(4);
    });
    it("renders HanLoSu in multiple lines", () => {
      const { block } = setup([{
        臺羅閏號調: "Ta̍k-ke",
        漢字: "逐家",
        語句: "",
      }, {
        臺羅閏號調: "tsò-hué",
        漢字: "做伙",
      }]);
      expect(block).to.have.length(2);
    });
    it("passes props to HanLoSu", () => {
      const { hanlosu } = setup([{
        臺羅閏號調: "Ta̍k-ke",
        漢字: "逐家",
        語句: "",
      }]);
      expect(hanlosu.props()).to.eql({
        臺羅閏號調: "Ta̍k-ke",
        漢字: "逐家",
      });
    });
    it("renders 1 PlayButton in a line", () => {
      const { block } = setup([{
        臺羅閏號調: "Ta̍k-ke",
        漢字: "逐家",
        語句: "",
      }]);
      expect(block.children(PlayButton)).to.have.length(1);
    });
    it("renders none", () => {
      const { block } = setup([]);
      expect(block.children(HanLoSu)).to.have.length(0);
    });
  });
});
