import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Facebook, Twitter } from 'react-feather'

import AimHigher from '../img/aimhigher.svg'
import TripAdvisor from '../img/tripadvisor.svg'

import '../scss/partials/footer.scss'

const Footer = () => {
	const menu = [
			{
				url: 'https://www.facebook.com/KangarooInn',
				title: 'Facebook',
				type: 'facebook',
			},
			{
				url: 'https://twitter.com/kangarooinn',
				title: 'Twitter',
				type: 'twitter',
			},
			{
				url: 'https://www.tripadvisor.com.au/Hotel_Review-g255103-d3486423-Reviews-Kangaroo_Inn-Perth_Greater_Perth_Western_Australia.html',
				type: 'tripadvisor',
				title: 'TripAdvisor',
			},
		],
		SocialIcons = {
			twitter: <Twitter />,
			facebook: <Facebook />,
			tripadvisor: <TripAdvisor />,
		}
	return (
		<footer>
			<nav className="icons">
				<ul>
					{menu.map(item => (
						<li key={item.type}>
							<a href={item.url} target="_blank">
								<span>{item.title}</span>
								{SocialIcons[item.type]}
							</a>
						</li>
					))}
				</ul>
			</nav>
			<a className="aimhigher" href="https://aimhigherweb.design" target="_blank" rel="nofollow">
				<AimHigher />
			</a>
		</footer>
	)
}

export default Footer
