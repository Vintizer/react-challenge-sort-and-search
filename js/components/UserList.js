import React, {PropTypes, Component} from 'react'
import Data from './DataLoader'


export default class UserList extends Component {
	constructor() {
		super();
		this.setState({
			data: [{"name": "Mary Peterson"},{"name": "Agnes Foster"}]
		});
	}
	// getInitialState() {
	// 	return {
	// 		data: [{"name": "Mary Peterson"},{"name": "Agnes Foster"}]
	// 	}
	// }

	render() {
		// Data.then((response) => {
		// 		return response.json();
		// 		// this.setState({
		// 		// 	res:response.json()
		// 		// })
		// 	})
		// 	.then((res) => {
		// 			console.log("res", res);
		// 			// this.setState({
		// 			// 		res
		// 			// 	})
		// 		}
		// 	)
		return (
			<div>
				<p>Error while receive photo - {this.state.data}</p>
				<ul>
					{this.state.data.map((l) => {
							return <li>{l.name}</li>;
						}
					)
					}
				</ul>
			</div>
		)
	}
}
