import React, {Component} from 'react';
import TimeTable from './TimeTable.js';
import './ScreenPlay.css';

export default class ScreenPlay extends Component {
  state = {
    table: {
      class_info: [
        [...Array(12)],
        [...Array(12)],
        [...Array(12)],
        [...Array(12)],
        [...Array(12)],
      ],
      color: [],
      length: []
    }, 
    loop: false
  }

  constructor(props) {
    super(props)

    for(var i = 0; i < 5; i++) {
      for(var j = 0; j < 12; j++) {
        this.state.table.class_info[i][j] = 'None'
      }
    }

    this.interval = null
  }

  startLoop() {
    this.setState({loop: true}, ()=>{
      this.interval = setInterval(this.loop.bind(this), 1000);
    })
  }

  endLoop() {
    if(this.interval != null)
      clearInterval(this.interval)
  }

  loop() {
    if(this.state.loop) {
      console.log("loop");
    } else {
      this.endLoop()
    }
  }

  componentDidMount() {
    //this.startLoop();
  }

  componentWillUnmount() {
    this.endLoop();
  }
  
  render() {
    return (
      <div className="App">
        <button onClick={this.startLoop.bind(this)}>Hello</button>
        <div className="Header">
        </div>
        <TimeTable table={this.state.table} />
        <div className="Controls">
        </div>
        <div className="Footer">
        </div>
      </div>
    );
  }
}
