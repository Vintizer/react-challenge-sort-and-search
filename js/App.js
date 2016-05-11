import React, {Component} from 'react';
import Toolbar from './components/Toolbar';
import UserList from './components/UserList';


export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			phrase: 'TestPhrase',
			count: 0
		};
	}

	setFilter(e) {
		console.log("val", e.target.value);
		this.setState({
			filter: e.target.value
		})
	}
	

	render() {
		return (
			<div className="container app">
				<Toolbar setFilter={this.setFilter.bind(this)}/>
				<UserList filter={this.state.filter}/>
			</div>
		);
	}
}
