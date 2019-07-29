import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import '../scss/partials/header.scss'

const Header = () => (
	<StaticQuery
		query={graphql`
			query {
				file(name: { eq: "logo" }) {
					childImageSharp {
						fixed(width: 500) {
							...GatsbyImageSharpFixed_withWebp
						}
					}
				}
			}
		`}
		render={data => (
			<header>
				<Link to="/" className="site-logo">
					<Img fixed={data.file.childImageSharp.fixed} />
				</Link>
			</header>
		)}
	/>
)

export default Header
