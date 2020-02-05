import React, { Component } from 'react';

class AuthLayout extends Component {
	render() {
		return <React.Fragment>{this.props.children}</React.Fragment>;
	}
}

export default AuthLayout;
