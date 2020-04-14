import React, { Component } from "react";

import "./App.css";
import TitleHeader from "./titleHeader.jsx";

class App extends Component {
  state = {
    value: "defult item",
    show: true,
    data: [
      {
        id: 1,
        title: "first item"
      },
      {
        id: 2,
        title: "secound item"
      },
      {
        id: 3,
        title: "third item"
      }
    ]
  };
  Changetitle(title) {
    this.setState({
      value: title
    });
  }

  showHandler() {
    //we should have function current state to change the opcite
    this.setState(x => ({
      show: !x.show //x is the current state
    }));
  }

  render() {
    const list = this.state.data.map(item => {
      return (
        <li key={item.id} onClick={() => this.Changetitle(item.title)}>
          {item.title}
        </li>
      );
    });
    return (
      <div className="wrapper">
        {this.state.show ? <TitleHeader newTitle={this.state.value} /> : null}
        <ul className="list">{list}</ul>
        <button className="btn" onClick={() => this.showHandler()}>
          Show and Hide
        </button>
      </div>
    );
  }
}

export default App;
