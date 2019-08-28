import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import ScreenPlay from './Screens/ScreenPlay.js'

class App() extends Component {
  this.state = {
    currentScreen: "ScreenPlay"
  }
  render() {
    if(this.state.currentScreen === "ScreenPlay" )
      return (
        <ScreenPlay />
      );
  }
}

export default App;
