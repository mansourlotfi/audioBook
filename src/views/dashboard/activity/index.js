import React, { Component } from 'react';
import ActivityTable from './table';

class Activity extends Component {
	render() {
		return (
			<div>
				<div style={{ textAlign: 'center', padding: 20, color: 'red' }}>
					<h2>activity as a freelancer</h2>
				</div>
				<ActivityTable />
			</div>
		);
	}
}

export default Activity;
