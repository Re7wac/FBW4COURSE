import React from "react";
import Useritem from "./Useritem.jsx";
import Spiner from "../layout/Spiner.jsx";
import PropTypes from "prop-types";

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spiner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map(item => (
          <Useritem key={item.id} user={item} />
        ))}
      </div>
    );
  }
};
Users.prototype = {
  uusers: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
  
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};
export default Users;
