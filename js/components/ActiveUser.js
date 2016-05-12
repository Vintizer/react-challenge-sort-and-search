import React, {PropTypes, Component} from 'react'

export default class ActiveUser extends Component {
	constructor(props) {
		super(props);
		
	}


	render() {
		let {name, age, image, phone, phrase} = this.props.active
		return (
			<p>{name + " " + age + " " + image + " " + phone + " " + phrase}</p>
		)
	}
}