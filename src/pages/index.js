import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import Booking from '../components/booking.js'

export default class IndexPage extends React.Component {
	componentDidMount() {
		setTimeout(console.log(document.querySelector(`div[data-sitekey='${process.env.GATSBY_OCTORATE_SITEKEY}']`)), 10000)
	}

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
			</Layout>
		)
	}
}

const Features = ({ title, items }) => <div></div>

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
