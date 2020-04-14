import React, { Component } from "react";
import LeftSide from "../LeftSide/leftSide";
import RightSide from "../RightSide/rightSide";
import Users from "../users/Users";
import Article from "../Article/article";
import "./body.css";

class Body extends Component {
  render() {
    return (
      <div className="Body">
        <LeftSide />
        <Article />
        <RightSide />
      </div>
    );
  }
}

// class Useritem extends Component {
//   render() {
//     const { login, avatar_url, html_url } = this.props.user;
//     return (
//       <div className='card text-center'>
//         <img src={avatar_url} className='round-img' style={{ width: '60px' }} />
//         <h3>{login}</h3>
//         <div>
//           <a href={html_url} className='btn btn-dark btn-sm my-1'>
//             More
//           </a>
//         </div>
//       </div>
//     );
//   }
// }

// export default Useritem;
export default Body;
