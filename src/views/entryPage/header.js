import React, { Component } from 'react';
import LoginModal from './headerLoginModal';
import './header.scss';

export default class Header extends Component {
	state = {
		isOpen: Boolean(false)
	};
	render() {
		return (
			<div className="loginBody">
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
								{/* <a href="/home">
									<li>ورود به پنل کاربری </li>
								</a> */}
								{/* <Link to="/home"> */}
								<li onClick={() => this.setState({ isOpen: true })}>ورود به پنل کاربری </li>
								{/* </Link> */}
							</ul>
							<LoginModal
								handleOpen={this.state.isOpen}
								handleClose={() => this.setState({ isOpen: false })}
							/>
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
			</div>
		);
	}
}
