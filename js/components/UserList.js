import React, {PropTypes, Component} from 'react'
import Data from './DataLoader'
import UserData from './UserData'


export default class UserList extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		Data.then((response) => {
				return response.json();
			})
			.then((res) => {
					this.props.setData(res)
				}
			)
	}

	render() {
		// let fData = this.props.data.filter((l)=> {
		// 	if (l.name.toLowerCase().indexOf((this.props.filter || "").toLowerCase()) !== -1) {
		// 		return true;
		// 	}
		// });
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
					{this.props.data.map((l) => {
							return <UserData key={l.id} data={l} setActive={this.props.setActive}/>
						}
					)}
					</tbody>
				</table>
			</div>
		)
	}
}
