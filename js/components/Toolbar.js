import React, {Component} from 'react';

export default class Toolbar extends Component {
	render() {
		return (
			<input type="text" placeholder="Search in here..."
				   className="btn btn-default" onChange={this.props.setFilter}>
			</input>
		);
	}
}


