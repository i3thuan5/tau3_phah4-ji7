import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import sinon from "sinon";
import 複製鈕 from "../../src/元素/複製鈕/複製鈕";

const initArgv = {
  複製內容: "",
  title: "sui2",
};

const setup = (argv = initArgv) => {
  const component = shallow(
    <複製鈕 {...argv}/>,
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
  });
});
