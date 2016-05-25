// import React, {PropTypes, Component} from 'react'
//
// export default class ActiveUser extends Component {
// 	constructor(props) {
// 		super(props);
//
// 	}
//
//
// 	render() {
// 		let {name, age, image, phone, phrase} = this.props.active
// 		return (
// 			<p>{name + " " + age + " " + image + " " + phone + " " + phrase}</p>
// 		)
// 	}
// }
import React, {PropTypes, Component} from 'react'

export default class ActiveUser extends Component {
	constructor(props) {
		super(props);

	}


	render() {
		let {name, age, image, phone, phrase} = this.props.active
		return (
			<div className="thumbnail">
				<img src={"images/" + image + ".svg"}/>

				<div className="thumbnail-caption">
					<h3>{name}</h3>
					<table className="user-info table table-responsive">
						<tbody>
						<tr>
							<td>Age:</td>
							<td>{age}</td>
						</tr>
						<tr>
							<td>Favorite animal:</td>
							<td>{image}</td>
						</tr>
						<tr>
							<td>Phone:</td>
							<td>8 {phone}</td>
						</tr>
						</tbody>
					</table>

					<p><b>Favorite phrase:</b> {phrase}</p>
				</div>
			</div>

		)
	}
};