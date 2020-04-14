import React from "react";
import PropTypes from "prop-types";
const alertcomponent = (props) => {
  return (
    props.alert !== null && (
      <div className={` alert alert-${props.alert.type}`}>
        <a href="#" onClick={props.RemoveText}>
          <i className={"fa fa-window-close"}></i>{" "}
        </a>
        {props.alert.msg}
      </div>
    )
  );
};
alertcomponent.propTypes = {
  alert: PropTypes.object.isRequired,
  RemoveText: PropTypes.func.isRequired
};
export default alertcomponent;

// import React from "react";
// import PropTypes from "prop-types";

// const Alert = ({ alert }) => {
//     return (
//         alert !== null && (
//             <div className={`alert alert-${alert.type}`}>
//                 <i className={"fas fa-info-circle"} />
//                 {alert.msg}
//             </div>
//         )
//     );
// };

// Alert.propType = {
//     alert: PropTypes.object.isRequired
// };

// export default Alert;
