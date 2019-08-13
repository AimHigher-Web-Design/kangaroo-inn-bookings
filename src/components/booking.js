import React from 'react'
import { DateRangePicker } from 'react-dates'
import moment from 'moment'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

export default class Booking extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			startDate: moment().add(1, 'days'),
			endDate: moment().add(2, 'days'),
			focusedInput: null,
			pax: 1,
		}
	}

	render() {
		return (
			<form
				id="booking-form"
				action="https://book.octorate.com/octobook/site/reservation/result.xhtml"
				target="_blank"
				method="GET"
				data-serialize="false"
			>
				<legend>Book Now</legend>
				<input type="hidden" name="siteKey" value={process.env.GATSBY_OCTORATE_SITEKEY} />
				<input type="hidden" name="lang" value="en" />
				{/* <label>Check in</label> */}

				<input
					type="hidden"
					className="validate hasDatepicker"
					name="checkin"
					placeholder="Check in"
					data-advance="1"
					id="dp1564363784763"
					value={moment(this.state.startDate).format('YYYY-MM-DD')}
				/>
				{/* <label>Check out</label> */}

				<input
					type="hidden"
					className="validate hasDatepicker"
					name="checkout"
					placeholder="Check out"
					data-minstay="1"
					id="dp1564363784764"
					value={moment(this.state.endDate).format('YYYY-MM-DD')}
				/>

				<DateRangePicker
					startDate={this.state.startDate} // momentPropTypes.momentObj or null,
					startDateId="picker-start" // PropTypes.string.isRequired,
					endDate={this.state.endDate} // momentPropTypes.momentObj or null,
					endDateId="picker-end" // PropTypes.string.isRequired,
					onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
					focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
					onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
					displayFormat="DD MMM YY"
					numberOfMonths="1"
					anchorDirection="ANCHOR_LEFT"
				/>

				<label>Guests</label>
				<fieldset>
					<div
						role="button"
						className="btn"
						id="decrease"
						onClick={() => {
							if (this.state.pax > 1) {
								this.setState({ pax: parseInt(this.state.pax, 10) - 1 })
							} else {
								document.getElementById('decrease').classList.add('disabled')
							}
						}}
					>
						-
					</div>
					<input
						type="number"
						name="pax"
						id="number"
						value={this.state.pax}
						min="1"
						max="8"
						onChange={e => this.setState({ pax: e.target.value })}
					/>
					<div
						className="btn"
						role="button"
						id="increase"
						onClick={() => {
							if (this.state.pax < 8) {
								this.setState({ pax: parseInt(this.state.pax, 10) + 1 })
							} else {
								document.getElementById('increase').classList.add('disabled')
							}
						}}
					>
						+
					</div>
				</fieldset>

				<input type="submit" value="Search" />
			</form>
		)
	}
}
