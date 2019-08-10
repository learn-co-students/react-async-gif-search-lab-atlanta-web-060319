import React, {Component} from 'react'

export default class GifSearch extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<form action="/action_page.php">
	  				Enter a Search Term<br/>
	  				<input type="text" /><br/>
	  				<button type="button" onClick={this.props.handleSearch}>Find Gifs</button>
				</form>
			</div>
		)
	}
}