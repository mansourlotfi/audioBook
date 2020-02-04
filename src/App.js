import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './App.scss';
import Home from './views/home.js';
import About from './views/about.js';
import Dashboard from './views/dashboard.js';





class App extends Component {
  render() {
    return (
      <div>
               <Route path="/" exact component={Home}/>
               <Route path="/about" component={About}/>
               <Route path="/dashboard" component={Dashboard}/>



        
      </div>
    );
  }
}

export default App;