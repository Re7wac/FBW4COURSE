import React, { Component } from "react";
import Light from "./Light.jsx";

import "./App.css";

class App extends Component {
  state = { isToggleOn: true }; //Local Component
  changeToggle = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  };
  render() {
    return (
      <>
        <Light isToggleOn={this.state.isToggleOn}/>
        <button className="button" onClick={this.changeToggle}>
          {this.state.isToggleOn ? "OFF" : "ON"}
        </button>
      </>
    );
  }
}

export default App;
