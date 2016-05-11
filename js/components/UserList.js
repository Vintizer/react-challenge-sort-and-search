import React, {PropTypes, Component} from 'react'
import Data from './DataLoader'
import UserData from './UserData'


export default class UserList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [{
				"id": 0,
				"name": "Mary Peterson",
				"age": 65,
				"phone": "(747) 271-4236",
				"image": "raccoon",
				"phrase": "Jiomu mopozi fobgijco jinekhu agjuhbi fesjom fillat pu jabur ro vopzivuf da re suwaw bujre."
			}]
		}
	}

	componentWillMount() {
		Data.then((response) => {
				return response.json();
			})
			.then((res) => {
				this.props.setData(res)
					// this.setState({
					// 	data: res
					// })
				}
			)
	}

	render() {
		// let firstUser = this.props.data.map((l) => {
		// 	if (l.name.toLowerCase().indexOf((this.props.filter || "").toLowerCase()) !== -1) {
		// 		return l;
		// 	}
		// });
		// for (let i =0; i < firstUser.length; i++) {
		// 	if(firstUser[i]) {
		// 		firstUser = firstUser[i];
		// 		break;
		// 	}
		// }
		// if(firstUser) {
		// 	this.props.setActiveById(firstUser.id)
		// } else {
		// 	// this.props.setActiveById(null)
		// }
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
							if (l.name.toLowerCase().indexOf((this.props.filter || "").toLowerCase()) !== -1) {
								return <UserData key = {l.id} data={l} filter={this.props.filter} setActive={this.props.setActive}/>
							}
						}
					)}
					</tbody>
				</table>
			</div>
		)
	}
}
