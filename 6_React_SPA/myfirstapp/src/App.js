import React, { Component } from 'react';
import './App.css';

import Header from "./components/Header/header"
import Body from './components/Body/body';
import Footer from "./components/Footer/footer"


class App extends Component {
  //I can add method here
  render() {
    //or here
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer Ali='Seher geerter ' color='black'/>
        <Footer Mostafa='Karmnjo' Ali='Barda' color='blue'/>



      </div>
    );
  }

}

export default App;