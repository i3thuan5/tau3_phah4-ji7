import React from "react";
import { MainSection } from "demo-ui";
import PropTypes from "prop-types";
import Container翻譯結果 from "../../元素/翻譯/翻譯結果.container";
import Container查表格 from "./查表格.container";

class 查 extends React.Component {
  render() {
    return (
    <MainSection>
        <Container查表格 語句={this.props.語句}/>
        <Container翻譯結果/>
     </MainSection>
    );
  }
}

查.propTypes = {
  語句: PropTypes.string,
};

export default 查;
