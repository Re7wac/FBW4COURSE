//BrowserRouter is the router implementaion for HTML 5 browser
//Link IS YOUR REPLACMENT FOR ANOTHER TAGES
//ROUTER  IS THE CONDITIONALLY SHOWN COMPONENT BASED ON MATCHING A PATH TO A urL
//SWITCH RETURNS ONLYTHE FIRST MATCHING ROUTER RATHER THEN ALL MATCHING ROUTES.

import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import "./App.css";

const App = () => {
  return (
    <div className="Div">
      <Router>
        <Fragment>

          <Switch>
            <Route path="/" render={() => <h1>Home</h1>} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Fragment>
      </Router>
    </div>
  );
};

export default App;
