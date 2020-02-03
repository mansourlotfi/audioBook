import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import './App.scss';
import Home from './views/home.js';



class App extends Component {
  render() {
    return (
      <div>
               <Route path="/" exact component={Home}/>
        
      </div>
    );
  }
}

export default App;