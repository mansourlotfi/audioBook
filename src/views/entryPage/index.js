import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import axios from 'axios';
import './entryPage.css';

export default class EntryPage extends Component {
	state = {
		persons: []
	};

	componentDidMount() {
		axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
			const persons = res.data;
			this.setState({ persons });
			console.warn(this.state.persons);
		});
	}
	render() {
		return (
			<div className="loginBody">
				<Header />
				<ul style={{ color: 'white' }}>
					{this.state.persons.map((person) => (
						<li>
							{person.name}
							<br /> {person.email}
						</li>
					))}
				</ul>

				<Footer />
			</div>
		);
	}
}
