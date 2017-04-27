import React from "react";
import PropTypes from "prop-types";
import 合成結果 from "../合成/合成結果";

class 漢字一逝臺羅一逝 extends React.Component {

  render() {
    const { 腔口, 查詢結果 } = this.props;

    const 綜合標音 = 查詢結果.綜合標音.map(
      (綜音, i) => (
        <table key={i} className='app table'>
          <tbody>
            <tr>
              <td>
                <合成結果
                  腔口={腔口}
                  語句={綜音.分詞}/>
              </td>
              <td>{綜音.漢字}</td>
            </tr>
            <tr>
              <td/>
              <td>{綜音.臺羅閏號調}</td>
            </tr>
          </tbody>
        </table>
      ),
    );
    return (
        <div>
          {綜合標音}
        </div>
    );
  }
}

漢字一逝臺羅一逝.propTypes = {
  查詢結果: PropTypes.shape({
    綜合標音: PropTypes.array.isRequired,
  }).isRequired,
  腔口: PropTypes.string.isRequired,
};

export default 漢字一逝臺羅一逝;
