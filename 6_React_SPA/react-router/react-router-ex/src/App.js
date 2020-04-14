import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";

class App extends Component {
  state = {
    email: "",
    password: ""
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({
      email: e.target.email.value,
      password: e.target.password.value
    });
  };

  render() {
    return (
      <Router>
        <Fragment>
          <NavigationBar />
          <Layout>
            <Switch>
              <Route exact path="/" render={props => <Home email={this.state.email} password={this.state.password} />} />
              <Route path="/about" component={About} />
              <Route path="/contact" render={props => <Contact submitHandler={this.submitHandler}/>} />
            </Switch>
          </Layout>
        </Fragment>
      </Router>
    );
  }
}

export default App;
