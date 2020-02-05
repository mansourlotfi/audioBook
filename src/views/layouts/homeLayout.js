import React, { Component } from 'react';
import AppDrawer from '../../components/drawer';

class HomeLayout extends Component {
	render() {
		return (
			<div>
				<AppDrawer>{this.props.children}</AppDrawer>
			</div>
		);
	}
}

export default HomeLayout;
