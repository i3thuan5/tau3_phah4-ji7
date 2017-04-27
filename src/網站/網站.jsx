import React from "react";
import PropTypes from "prop-types";
import { Layout } from "demo-ui";
import 頁尾 from "./頁尾";

class 網站 extends React.Component {

  render() {
    const { ku } = this.props.params;

    return (
        <Layout>
          {
            React.cloneElement(
              this.props.children,
              {
                語句: ku || "逐家tsò-hué來chhit4-tho5！",
              },
            )
          }
          <頁尾/>
        </Layout>
    );
  }
}

網站.propTypes = {
  params: PropTypes.shape({
    ku: PropTypes.string.isRequired,
  }),
  children: PropTypes.node.isRequired,
};

export default 網站;
