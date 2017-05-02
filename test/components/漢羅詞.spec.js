import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import 漢羅詞 from "../../src/元素/顯示/漢羅詞";

const setup = ({ 漢字詞 = "", 臺羅閏號調 = "" }) => {
  const component = shallow(
    <漢羅詞 漢字詞={漢字詞}
      臺羅閏號調={臺羅閏號調}/>,
    );
  return component.html();
};

describe("Component", () => {
  describe("漢羅詞", () => {
    it("should render 一組漢羅詞", () => {
      const html = setup({
        臺羅閏號調: "Ta̍k-ke",
        漢字詞: "逐家",
      });
      expect(html)
      .to
      .equal("<ruby>逐家<rt>Ta̍k-ke</rt></ruby>");
    });
  });
});
