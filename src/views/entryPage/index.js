import React, { Component } from 'react';
import './entryPage.css';

export default class EntryPage extends Component {
	render() {
		return (
			<div className="body">
				<header>
					<div className="container">
						<nav>
							<a href="/" className="brand">
								IR-Programmers
							</a>
							<ul>
								<li>خانه</li>
								<li>مشاوره</li>
								<li>امنیت</li>
								<li>تیم ما</li>
								<li>نمونه کارها</li>
							</ul>
						</nav>
						<div className="container2">
							<ul>
								<li>
									<img src={require('../../assets/home/header/col-4.png')} alt="مشاوره" />
									<h3>مشاوره</h3>
								</li>
								<li>
									<img src={require('../../assets/home/header/col-3.png')} alt="امنیت" />
									<h3>امنیت</h3>
								</li>
								<li>
									<img src={require('../../assets/home/header/col-2.png')} alt="تیم ما" />
									<h3>تیم ما</h3>
								</li>
								<li>
									<img src={require('../../assets/home/header/col-1.png')} alt="مشارکت" />
									<h3>مشارکت</h3>
								</li>
							</ul>
						</div>
					</div>
				</header>
				<body />
			</div>
		);
	}
}
