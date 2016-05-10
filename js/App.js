import React, { Component } from 'react';
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
  render() {
    return (
      <div className="container app">
        <Toolbar />
        <UserList />
        <p style={{marginTop: 2 + 'rem'}}>{this.state.phrase}</p>
      </div>
    );
  }
}
