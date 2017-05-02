import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import 漢羅詞 from "../../src/元素/顯示/漢羅詞";

const setup = ({ 漢字詞 = "", 臺羅閏號調 = "" }) => {
  const component = shallow(
    <漢羅詞 漢字詞={漢字詞}
      臺羅閏號調={臺羅閏號調}/>,
    );
  return {
    漢: component.text(),
    羅: component.find("rt").render().text(),
  };
};

describe("Component", () => {
  describe("漢羅詞", () => {
    it("should render 一組漢羅詞", () => {
      const wrapper = setup({
        臺羅閏號調: "Ta̍k-ke",
        漢字詞: "逐家",
      });
      expect(wrapper.漢).match(/^逐家/);
      expect(wrapper.羅).match(/^Ta̍k-ke/);
    });
  });
});
