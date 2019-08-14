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
						fluid(maxWidth: 500) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		`}
		render={data => (
			<header>
				<Link to="/" className="site-logo">
					<Img fluid={data.file.childImageSharp.fluid} style={{ width: '100%', height: 'auto', minHeight: '50px' }} />
				</Link>
				<h1>Kangaroo Inn Bookings</h1>
			</header>
		)}
	/>
)

export default Header
