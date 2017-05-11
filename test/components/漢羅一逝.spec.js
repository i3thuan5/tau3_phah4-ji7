import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import { HanLoSu, PlayButton } from "demo-ui";
import 漢羅一逝 from "../../src/元素/顯示/漢羅一逝";

const setup = (argv) => {
  const component = shallow(
    <漢羅一逝 {...argv}/>,
    );
  return {
    component,
    block: component.find(".block"),
    hanlosu: component.find(HanLoSu),
  };
};

describe("Component", () => {
  describe("漢羅一逝", () => {
    it("renders 1 HanLoSu in a line", () => {
      const { block } = setup({
        臺羅閏號調: "Ta̍k-ke",
        漢字: "逐家",
        分詞: "",
      });
      expect(block.children(HanLoSu)).to.have.length(1);
    });
    it("renders multiple HanLoSu in a line", () => {
      const { block } = setup({
        臺羅閏號調: "Ta̍k-ke tsò-hué lâi-tshit-thô ！",
        漢字: "逐家 做伙 來𨑨迌 ！",
        分詞: "",
      });
      expect(block.children(HanLoSu)).to.have.length(4);
    });
    it("passes props to 1 HanLoSu", () => {
      const { hanlosu } = setup({
        臺羅閏號調: "Ta̍k-ke",
        漢字: "逐家",
        分詞: "",
      });
      expect(hanlosu.props()).to.eql({
        臺羅閏號調: "Ta̍k-ke",
        漢字: "逐家",
      });
    });
    it("passes props to 2 HanLoSu", () => {
      const { hanlosu } = setup({
        臺羅閏號調: "Ta̍k-ke tsò-hué",
        漢字: "逐家 做伙",
        分詞: "",
      });
      expect(hanlosu.at(1).props()).to.eql({
        臺羅閏號調: "tsò-hué",
        漢字: "做伙",
      });
    });
    it("renders 1 PlayButton in a line", () => {
      const { block } = setup({
        臺羅閏號調: "Ta̍k-ke",
        漢字: "逐家",
        分詞: "",
      });
      expect(block.children(PlayButton)).to.have.length(1);
    });
  });
});
