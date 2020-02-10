import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import './entryPage.css';

export default class EntryPage extends Component {
	render() {
		return (
			<div className="loginBody">
				<Header />

				<div className="containerBody">
					<div className="containerphoto">
						<img src={require('../../assets/home/mobile.png')} alt="ir-programmers" />
					</div>
					<div className="containerText">
						<span className="spanText">تست</span>
					</div>
				</div>
				<div className="buttonContainer">
					<ul>
						<li>
							<img src={require('../../assets/home/footer/col-4.png')} alt="آموزش" />
							<h3>آموزش</h3>
						</li>
						<li>
							<img src={require('../../assets/home/footer/col-3.png')} alt="امور حقوقی" />
							<h3>امور حقوقی</h3>
						</li>
						<li>
							<img src={require('../../assets/home/footer/col-2.png')} alt=" اخبار" />
							<h3> اخبار</h3>
						</li>
						<li>
							<img src={require('../../assets/home/footer/col-1.png')} alt="تماس با ما" />
							<h3>تماس با ما</h3>
						</li>
					</ul>
				</div>

				<Footer />
			</div>
		);
	}
}
