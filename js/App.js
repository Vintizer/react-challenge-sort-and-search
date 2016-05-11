import React, {Component} from 'react';
import Toolbar from './components/Toolbar';
import UserList from './components/UserList';
import ActiveUser from './components/ActiveUser';


export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: {
				name: "",
				age: "",
				animal: "",
				phone: "",
				phrase: ""
			},
			data: []
		}
	}

	setFilter(e) {
		this.setState({
			filter: e.target.value
		})
	}

	
	setData(data) {
		this.setState({
			data
		})
	}

	setActiveById(id) {
		if (id) {
			this.setState({
				active: this.state.data[id]
			})
		}

	}

	setActive(data) {
		console.log("data", data);
		if (data.length) {
			this.setState({
				active: this.state.data[data.target.parentNode.getAttribute('data-react')]
			})
		}

	}


	render() {
		return (
			<div className="container app">
				<ActiveUser active={this.state.active}/>
				<Toolbar setFilter={this.setFilter.bind(this)}/>
				<UserList setData={this.setData.bind(this)} setActiveById={this.setActiveById.bind(this)}
						  data={this.state.data}
						  filter={this.state.filter} setActive={this.setActive.bind(this)}/>
			</div>
		);
	}
}
