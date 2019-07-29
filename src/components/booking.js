import React from 'react'
import { DateRangePicker } from 'react-dates'
import moment from 'moment'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

export default class Booking extends React.Component {
	constructor(props) {
		super(props)
		this.state = { startDate: null, endDate: null, focusedInput: null }
	}

	render() {
		return (
			<form action="https://book.octorate.com/octobook/site/reservation/result.xhtml" target="_blank" method="GET" data-serialize="false">
				<input type="hidden" name="siteKey" value={process.env.GATSBY_OCTORATE_SITEKEY} />
				<input type="hidden" name="lang" value="en" />
				{/* <label>Check in</label> */}

				<input type="hidden" className="validate hasDatepicker" name="checkin" placeholder="Check in" data-advance="1" id="dp1564363784763" value={moment(this.state.startDate).format('YYYY-MM-DD')} />
				{/* <label>Check out</label> */}

				<input type="hidden" className="validate hasDatepicker" name="checkout" placeholder="Check out" data-minstay="1" id="dp1564363784764" value={moment(this.state.endDate).format('YYYY-MM-DD')} />

				<DateRangePicker
					startDate={this.state.startDate} // momentPropTypes.momentObj or null,
					startDateId="picker-start" // PropTypes.string.isRequired,
					endDate={this.state.endDate} // momentPropTypes.momentObj or null,
					endDateId="picker-end" // PropTypes.string.isRequired,
					onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
					focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
					onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
				/>

				<label>Guest</label>
				<select name="pax">
					<option value="">Number of Guests</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="8">8</option>
				</select>

				<input type="submit" value="Search" />
			</form>
		)
	}
}
