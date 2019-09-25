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
			},
			images = data.images.edges

		return (
			<Layout meta={meta}>
				<Booking />
				{features.map(feature => (
					<div className="features" key={feature.title}>
						<h2>{feature.title}</h2>
						{feature.items.map(item => {
							images.some(image => {
								if (image.node.relativePath === item.image) {
									item.image = image.node.childImageSharp.fixed
									return true
								}
							})

							if (item.link) {
								return (
									<a href={item.link} target="_blank" className="block" key={item.title}>
										<Feature {...item} />
									</a>
								)
							} else {
								return (
									<div className="block" key={item.title}>
										<Feature {...item} />
									</div>
								)
							}
						})}
					</div>
				))}
			</Layout>
		)
	}
}

const Feature = ({ image }) => <Img fixed={image} />

export const pageQuery = graphql`
	query IndexQuery {
		site {
			siteMetadata {
				title
				description
				siteUrl
			}
		}
		images: allFile {
			edges {
				node {
					relativePath
					childImageSharp {
						fixed(width: 300) {
							...GatsbyImageSharpFixed_withWebp
						}
					}
				}
			}
		}
	}
`
