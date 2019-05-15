import React, { Component } from 'react';
import { getChatLog } from './service';
import './App.css';

console.log(getChatLog().then())

class App extends Component {
  constructor(){
    super()

    this.state = {
      test: []
      }
  }

  componentWillMount() {
    getChatLog().then((data) => {
      return this.setState({
        test: data
    })
    })
  }
  render() {
    console.log(this.state)
    return (
      <h1>
        Hello Robin!
      </h1>
    );
  }
}

export default App;
