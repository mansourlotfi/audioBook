import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Home from './views/home.js';
import About from './views/about.js';
import Dashboard from './views/dashboard';
import EntryPage from './views/entryPage/index.js';

class App extends Component {
	render() {
		return (
			<div>
				<Route path="/" exact component={EntryPage} />
				<Route path="/home" exact component={Home} />
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/about" component={About} />
			</div>
		);
	}
}

export default App;
