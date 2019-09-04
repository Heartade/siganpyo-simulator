import React, {Component} from 'react';
import TimeTable from './TimeTable.js';
import './ScreenPlay.css';

export default class ScreenPlay extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
        </div>
        <TimeTable />
        <div className="Controls">
        </div>
        <div className="Footer">
        </div>
      </div>
    );
  }
}
