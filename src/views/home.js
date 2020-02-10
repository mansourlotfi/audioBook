import React from 'react';
import Bg from '../assets/bg.jpg';

function Home() {
	const bodyStyle = {
		backgroundImage: 'url(' + Bg + ')',
		height: '900px',
		paddingTop: '50px'
		// marginTop: '0px'
	};
	return (
		<div style={bodyStyle}>
			<h2 style={{ color: 'white', textAlign: 'center' }}>Home asdasdasd</h2>
		</div>
	);
}

export default Home;
