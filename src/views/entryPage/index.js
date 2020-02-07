import React, { Component } from 'react';
import { SocialMediaIconsReact } from 'social-media-icons-react';
import { Link } from 'react-router-dom';

import './entryPage.css';

export default class EntryPage extends Component {
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
								<Link to="/home">
									<li>ورود به پنل کاربری </li>
								</Link>
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
				<div className="footer">
					<div class="rounded-social-buttons">
						<a class="social-button" href="https://www.facebook.com/" target="_blank">
							<SocialMediaIconsReact icon="facebook" url="#" size="40" iconSize="7" />
						</a>
						<a class="social-button " href="https://www.twitter.com/" target="_blank">
							<SocialMediaIconsReact
								icon="twitter"
								size="40"
								iconSize="7"
								url="https://twitter.com/your-twitter-handle"
							/>
						</a>
						<a class="social-button " href="https://www.linkedin.com/" target="_blank">
							<SocialMediaIconsReact
								icon="linkedin"
								size="40"
								iconSize="7"
								url="https://twitter.com/your-twitter-handle"
							/>
						</a>
						<a class="social-button " href="https://www.youtube.com/" target="_blank">
							<SocialMediaIconsReact
								icon="youtube"
								size="40"
								iconSize="7"
								url="https://twitter.com/your-twitter-handle"
							/>
						</a>
						<a class="social-button " href="https://www.instagram.com/" target="_blank">
							<SocialMediaIconsReact
								icon="instagram"
								size="40"
								iconSize="7"
								url="https://twitter.com/your-twitter-handle"
							/>
						</a>
					</div>
				</div>
			</div>
		);
	}
}
