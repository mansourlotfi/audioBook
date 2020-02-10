import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthContext } from './context/auth';
import PrivateRoute from './PrivateRoute';

import './App.scss';
import Home from './views/home.js';
import About from './views/about.js';
import Dashboard from './views/dashboard';
import EntryPage from './views/entryPage/index.js';

function App(props) {
	const [ authTokens, setAuthTokens ] = useState();
	const setTokens = (data) => {
		localStorage.setItem('tokens', JSON.stringify(data));
		setAuthTokens(data);
	};

	return (
		// <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
		<AuthContext.Provider value={true}>
			<Router>
				{/* authLayout */}
				<Route path="/" exact component={EntryPage} />

				{/* homelayout */}
				<PrivateRoute path="/home" component={Home} />
				<PrivateRoute path="/dashboard" component={Dashboard} />
				<PrivateRoute path="/about" component={About} />

				{/* rtlLayout */}
				<PrivateRoute path="/rtl" component={Dashboard} />
			</Router>
		</AuthContext.Provider>
	);
}

export default App;
