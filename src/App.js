import React, {Component} from 'react';
import './App.css';

import ScreenPlay from './Screens/ScreenPlay.js'

class App extends Component {
  state = {
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
