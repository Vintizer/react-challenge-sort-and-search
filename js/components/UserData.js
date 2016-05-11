import React, {PropTypes, Component} from 'react'


export default class UserData extends Component {
	render() {
		let l = this.props.data
			return (
				<tr data-react = {l.id} onClick={this.props.setActive}>
					<td ><img width="60px" src={"images/" + l.image + ".svg"}/></td>
					<td>{l.name}</td>
					<td>{l.age}</td>
					<td>{l.phone}</td>
				</tr>
			)
	}


}
