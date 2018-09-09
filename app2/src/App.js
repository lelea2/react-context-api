import React, { Component } from 'react';
import logo from './logo.svg';
import Parent from './components/Context';
import { ColoredButton } from './components/HOC';

console.log(ColoredButton);

class App extends Component {
  render() {
    return (
      <Parent />
    );
  }
}

export default App;
