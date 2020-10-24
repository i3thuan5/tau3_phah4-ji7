import React from "react";
import { MainSection } from "demo-ui";
import Container翻譯結果 from "../../元素/翻譯/翻譯結果.container";
import Container查表格 from "./查表格.container";
import "./查.css";

class 查 extends React.Component {

  render() {
    return (
      <MainSection>
        <Container查表格 {...this.props}/>
        <br/>
        <Container翻譯結果/>
      </MainSection>
    );
  }
}

export default 查;
