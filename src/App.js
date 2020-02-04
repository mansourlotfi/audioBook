import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './App.scss';
import Home from './views/home.js';
import About from './views/about.js';




class App extends Component {
  render() {
    return (
      <div>
               <Route path="/" exact component={Home}/>
               <Route path="/about" component={About}/>


        
      </div>
    );
  }
}

export default App;