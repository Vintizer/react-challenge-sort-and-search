import React, {Component} from 'react';

export default class Toolbar extends Component {
	render() {
		return (
			<div>
				<input type="text" placeholder="Search in here..."
					   className="btn btn-default" onChange={this.props.setFilter}>
				</input>
				<input type="button" onClick = {this.props.orderByAlphabet} value="Alphabet" />
				<input type="button" onClick = {this.props.orderByAge}  value="Age" />
			</div>
		);
	}
}