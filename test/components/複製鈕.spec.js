import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import sinon from "sinon";
import 複製鈕 from "../../src/元素/複製鈕/複製鈕";

const argv = {
  複製內容: "",
  title: "sui2",
};

const setup = (argv = argv) => {
  const copyOnClick = sinon.spy();
  const component = shallow(
    <複製鈕 {...argv} copyOnClick={copyOnClick}/>,
    );
  return {
    component,
    button: component.find("button"),
  };
};

describe("Component", () => {
  describe("複製鈕", () => {
    it("renders 複製鈕", () => {
      const { button } = setup();
      expect(button).to.have.length(1);
    });
    it("click ok", () => {
      const { button } = setup();
      expect(button.simulate("click")).to.have.length(1);
    });
  });
});
