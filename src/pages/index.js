import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Booking from '../components/booking.js'
import features from '../data/features.js'

export default class IndexPage extends React.Component {

	render() {
		const { data } = this.props,
			meta = {
				name: data.site.siteMetadata.title,
				description: data.site.siteMetadata.description,
				slug: data.site.siteMetadata.siteUrl,
			}

		return (
			<Layout meta={meta}>
				<Booking />
				{features.map(feature => (
					<Features {...feature} />
				))}
			</Layout>
		)
	}
}

const Features = ({ title, items }) => <div>
	<h2>{title}</h2>
	<div>{items.map(item => <div>{item.title} {item.date}</div>)}</div>
</div>

export const pageQuery = graphql`
	query IndexQuery {
		site {
			siteMetadata {
				title
				description
				siteUrl
			}
		}
	}
`
