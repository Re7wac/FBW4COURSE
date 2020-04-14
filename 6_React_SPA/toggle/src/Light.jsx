import React, { Component } from "react";
import lightoff from "./pic_bulboff.gif";
import lighton from "./pic_bulbon.gif";

class Light extends Component {
 
  render() {
    return (
        <img
        width="100"
        height="180"
        alt="light"
        onClick={this.changeImage}
        src={this.props.isToggleOn ? lighton : lightoff}
      />
    );
  }
}

export default Light;
