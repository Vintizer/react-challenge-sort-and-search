import React, {PropTypes, Component} from 'react'
import Data from './DataLoader'


export default class UserList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [{name: "Mary Peterson"}, {name: "Agnes Foster"}]
		}
	}

	componentWillMount() {
		Data.then((response) => {
				return response.json();
			})
			.then((res) => {
					this.setState({
						data: res
					})
				}
			)
	}

	render() {
		console.log("props filter", this.props.filter);
		return (
			<div>
				<table className="table table-striped table-bordered table-hover">
					<thead>
					<td><b>Image</b></td>
					<td><b>Name</b></td>
					<td><b>Age</b></td>
					<td><b>Phone</b></td>
					</thead>
					<tbody>
					{this.state.data.map((l) => {
							if (l.name.toLowerCase().indexOf((this.props.filter || "").toLowerCase()) !== -1) {
								return <tr>
									<td><img width="60px" src={"images/" + l.image+ ".svg"}/></td>
									<td>{l.name}</td>
									<td>{l.age}</td>
									<td>{l.phone}</td>
								</tr>;
							}
						}
					)}
					</tbody>
				</table>
			</div>
		)
	}
}
