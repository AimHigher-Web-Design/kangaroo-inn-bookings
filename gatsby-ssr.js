const React = require('react')

exports.onRenderBody = ({ setPostBodyComponents }) => {
	setPostBodyComponents([
		<script
			type="text/javascript"
			src="https://resx.octorate.com/octobook/resources/widget/js/form.js"
			data-sitekey={process.env.GATSBY_OCTORATE_SITEKEY}
		></script>,
	])
}
