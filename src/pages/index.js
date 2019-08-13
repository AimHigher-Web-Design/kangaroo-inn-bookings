import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Booking from '../components/booking.js'
import features from '../data/features.js'

import '../scss/layouts/home.scss'

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
					<Features key={feature.title} {...feature} />
				))}
			</Layout>
		)
	}
}

const Features = ({ title, items }) => (
	<div className="features">
		<h2>{title}</h2>
		{items.map(item => (
			<div className="block" key={item.title}>
				<h3>{item.title}</h3>
				{item.date && <p>{item.date}</p>}
				{item.image ? (
					<p>Image</p>
				) : (
					<img src="https://images.unsplash.com/photo-1538384837305-defd24ace943?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop&ixid=eyJhcHBfaWQiOjF9" />
				)}
			</div>
		))}
	</div>
)

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
