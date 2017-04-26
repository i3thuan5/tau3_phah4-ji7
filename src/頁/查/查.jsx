import React from "react";
import { browserHistory } from "react-router";
import Debug from "debug";
import Container翻譯結果 from "../../元素/翻譯/翻譯結果.container";
import Container查表格 from "./查表格.container";
import { MainSection } from "demo-ui";

const debug = Debug("tau3:查");

export default class 查 extends React.Component {
  render() {
    return (
    <MainSection>
        <Container查表格 語句={this.props.語句}/>
        <Container翻譯結果/>
     </MainSection>
    );
  }
}
