import React, {Component} from 'react'

export default class GifList extends Component {
	constructor(props) {
		super(props)
	}

	allGifs = () => {
		let allGifsElements = this.props.gifs.map((gif, index) => <li><img key={index} src={gif.images.original.url}/></li>)
		return allGifsElements
	}

	render() {
		return (
			<ul>
				{this.allGifs()}
			</ul>
		)
	}
}