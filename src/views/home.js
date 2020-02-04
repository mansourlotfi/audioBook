import React from 'react';
import Bg from '../assets/bg.jpg';
import HomeCard from '../components/homeCard';
function Home() {
	const bodyStyle = {
		backgroundImage: 'url(' + Bg + ')',
		height: '900px'
		// paddingTop : '0px',
		// marginTop: '0px'
	};
	const cardStyle = {
		width: '200px'
	};
	return (
		<div style={bodyStyle}>
			<h2 style={{ color: 'white', textAlign: 'center' }}>Home asdasdasd</h2>
			<HomeCard style={cardStyle} />
		</div>
	);
}

export default Home;
