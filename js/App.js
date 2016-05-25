import React, {Component} from 'react';
import Toolbar from './components/Toolbar';
import UserList from './components/UserList';
import ActiveUser from './components/ActiveUser';


export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: {
				id: "",
				name: "",
				age: "",
				animal: "",
				phone: "",
				phrase: ""
			},
			orderAge: true,
			orderAlphabet: true,
			data: [],
			filterData: []
		}
	}

	setFilter(e) {
		let fData = this.state.data.filter((l)=> {
			if (l.name.toLowerCase().indexOf((e.target.value || "").toLowerCase()) !== -1) {
				return true;
			}
		});
		console.log("fData", fData);
		this.setState({
			filter: e.target.value,
			active: {},
			filterData: fData
		}, this.setActiveByChangeView)
	}

	setActiveByChangeView() {
		let fData = this.state.data.filter((l)=> {
			if (l.name.toLowerCase().indexOf((this.state.filter || "").toLowerCase()) !== -1) {
				return true;
			}
		});
		this.setState({
			active: this.state.filterData[0]
		})
	}

	setData(data) {
		this.setState({
			data,
			active: {},
			filterData: data
		}, this.setActiveByChangeView)
	}

	setActiveById(id) {
		console.log("setActiveById", id);
		if (id || id === 0) {
			console.log("id here");
			this.setState({
				active: this.state.data[id]
			})
		}
	}

	setActive(data) {
		this.setState({
			active: this.state.data[data.target.parentNode.getAttribute('data-react')]
		})
	}

	findFirstLane() {
		let firstUserId;
		let firstUser = this.state.data.map((l) => {
			if (l.name.toLowerCase().indexOf((this.state.filter || "").toLowerCase()) !== -1) {
				return l;
			}
		});
		for (let i = 0; i < firstUser.length; i++) {
			if (firstUser[i]) {
				firstUserId = firstUser[i].id;
				break;
			}
		}
		return firstUserId
	}

	orderByAge() {
		let arr = this.state.filterData.slice();
		let arr2 = arr.slice();
		arr2.sort((a, b)=> {
			if (this.state.orderAge) {
				return a.age - b.age;
			} else {
				return b.age - a.age;
			}
		})
		this.setState({
			orderAge: !this.state.orderAge,
			filterData: arr2
		}, this.setActiveByChangeView)
	}

	orderByAlphabet() {
		let arr = this.state.filterData.slice();
		let arr2 = arr.slice();
		arr2.sort((a, b)=> {
			if (this.state.orderAlphabet) {
				if (a.name > b.name)
					return 1;
				else return -1;
			} else {
				if (a.name > b.name)
					return -1;
				else return 1;
			}

		})
		this.setState({
			orderAlphabet: !this.state.orderAlphabet,
			filterData: arr2
		}, this.setActiveByChangeView)
	}

	render() {
		return (
		<div className="app container-fluid">
			<Toolbar setFilter={this.setFilter.bind(this)} orderByAlphabet={this.orderByAlphabet.bind(this)}
					 orderByAge={this.orderByAge.bind(this)}/>
			<div className="row">
				<div className="col-sm-4 col-md-3 col-lg-2">
					<ActiveUser active={this.state.active} />
				</div>
				<div className="col-sm-8 col-md-9 col-lg-10">
					<UserList setData={this.setData.bind(this)}
							  data={this.state.filterData} setActive={this.setActive.bind(this)} />
				</div>
			</div>
		</div>
		);
	}
}
