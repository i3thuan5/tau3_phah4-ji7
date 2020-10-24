import React from "react";
import PropTypes from "prop-types";
import { Layout } from "demo-ui";
import 頁頭 from "./頁頭";
import 頁尾 from "./頁尾";
import config from "../config";

class 網站 extends React.Component {

  render() {
    const { ku, khiunn } = this.props.params;

    return (
        <Layout>
          <頁頭/>
          {
            React.cloneElement(
              this.props.children,
              {
                語句: ku || config.範例查詢(),
                腔: khiunn || config.預設腔口(),
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
    ku: PropTypes.string,
    khiunn: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};

export default 網站;
