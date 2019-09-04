import React, {Component} from 'react';
import TimeCell from '../Components/TimeCell.js';
import './ScreenPlay.css';

export default class TimeTable extends Component {
  state = {
    table: {
      class_info: [],
      color: [],
      length: []
    }
  }
  constructor() {
    super()
  }
  render() {
    return (
      <table> 
        <tr>
          <td></td>
          <td>M</td>
          <td>T</td>
          <td>W</td>
          <td>T</td>
          <td>F</td>
        </tr>
        {[...Array(12)].map((x,i)=>(
          <tr>
            <td>{''+(i<2?'0':'')+(i+8)+':00'}</td>
            {[...Array(5)].map((y,j)=>(<TimeCell day={j} time={i} table={this.state.table}/>))}
          </tr>
          ))}
      </table>
    );
  }
}
