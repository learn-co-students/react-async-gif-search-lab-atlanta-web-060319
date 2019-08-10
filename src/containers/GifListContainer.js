import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
	constructor() {
		super()
		this.state = {
			gifs: []
		}
	}

	handleSearch = (event) => {
		let url = `http://api.giphy.com/v1/gifs/search?q=${event.target.parentNode[0].value}&api_key=dc6zaTOxFJmzC&rating=g&limit=10`
		fetch(url)
		.then((response) => response.json())
		.then((jso) => this.setState({gifs: jso.data}))
		// .then(() => console.log(this.state))
	}

	componentDidMount() {
		let url = `http://api.giphy.com/v1/gifs/search?q=cat&api_key=dc6zaTOxFJmzC&rating=g&limit=10`
		fetch(url)
		.then((response) => response.json())
		.then((jso) => this.setState({gifs: jso.data}))
	}

	render() {
		return(
			<div>
				<GifSearch handleSearch={this.handleSearch} />
				<GifList gifs={this.state.gifs}/>
			</div>
		)
	}
}