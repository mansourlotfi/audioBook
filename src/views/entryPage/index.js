import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import './entryPage.css';

export default class EntryPage extends Component {
	render() {
		return (
			<div className="loginBody">
				<Header />

				<Footer />
			</div>
		);
	}
}
