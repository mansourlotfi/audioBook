import React, { Component } from 'react';
import { SocialMediaIconsReact } from 'social-media-icons-react';
import './footer.scss';

export default class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<div class="rounded-social-buttons">
					<a class="social-button" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
						<SocialMediaIconsReact
							icon="facebook"
							size="40"
							iconSize="7"
							url="https://twitter.com/your-twitter-handle"
						/>
					</a>
					<a class="social-button " href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
						<SocialMediaIconsReact
							icon="twitter"
							size="40"
							iconSize="7"
							url="https://twitter.com/your-twitter-handle"
						/>
					</a>
					<a
						class="social-button "
						href="https://www.linkedin.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<SocialMediaIconsReact
							icon="linkedin"
							size="40"
							iconSize="7"
							url="https://twitter.com/your-twitter-handle"
						/>
					</a>
					<a class="social-button " href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
						<SocialMediaIconsReact
							icon="youtube"
							size="40"
							iconSize="7"
							url="https://twitter.com/your-twitter-handle"
						/>
					</a>
					<a
						class="social-button "
						href="https://www.instagram.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<SocialMediaIconsReact
							icon="instagram"
							size="40"
							iconSize="7"
							url="https://twitter.com/your-twitter-handle"
						/>
					</a>
				</div>
			</div>
		);
	}
}
