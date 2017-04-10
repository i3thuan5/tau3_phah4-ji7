import React from 'react';
// import superagent from 'superagent-bluebird-promise';
import Debug from 'debug';
// import 翻譯結果 from '../../元素/翻譯/翻譯結果';
import './查.css';

var debug = Debug('tau3:查');

export default 查 = ({ 
  語句,
  正在查詢,
  查詢結果,
  requestSearch 
}) => {
  return (
      <div className='main container'>
        <textarea id='語句' defaultValue={語句}></textarea>
        <br/>
        <翻譯結果 後端網址={this.props.後端網址}
            腔口='閩南語'
            語句={語句}/>
      </div>
    );
  }
  )  
};

// export default class 查 extends React.Component {

//   constructor (props) {
//     super(props);
//     this.state = {
//       腔口:  '閩南語',
//       語句: this.props.params.ku || '逐家tsò-hué來chhit4-tho5！',
//     };
//   }

//   跳到語句 (textarea) {
//     let 語句 = textarea.target.value;
//     this.setState({ 語句 });
//     this.props.跳到語句(語句);
//   }

//   render () {
//     let { 腔口, 語句 } = this.state;
//     return (
//       <div className='main container'>
//         <textarea id='語句' defaultValue={語句} onKeyUp={this.跳到語句.bind(this)}></textarea>
//         <br/>
//         <翻譯結果 後端網址={this.props.後端網址}
//             腔口={腔口}
//             語句={語句}
//           />
//       </div>
//     );
//   }
// }
