import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './views/home.js';
import About from './views/about.js';
import Dashboard from './views/dashboard';
import EntryPage from './views/entryPage/index.js';

//importing layout
import HomeLayout from './views/layouts/homeLayout';
import AuthLayout from './views/layouts/authLayout';
import RtlLayout from './views/layouts/rtlLayout';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
	<Route
		{...rest}
		render={(props) => (
			<Layout>
				<Component {...props} />
			</Layout>
		)}
	/>
);

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Switch>
						{/* authLayout */}
						<AppRoute path="/" exact layout={AuthLayout} component={EntryPage} />

						{/* homelayout */}
						<AppRoute path="/home" exact layout={HomeLayout} component={Home} />
						<AppRoute path="/dashboard" exact layout={HomeLayout} component={Dashboard} />
						<AppRoute path="/about" exact layout={HomeLayout} component={About} />

						{/* rtlLayout */}
						<AppRoute path="/rtl" exact layout={RtlLayout} component={Home} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
