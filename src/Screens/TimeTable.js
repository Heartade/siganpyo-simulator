import React, {Component} from 'react';
import TimeCell from '../Components/TimeCell.js';
import './ScreenPlay.css';

export default class TimeTable extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <table>
        <tbody> 
          <tr>
            <td></td>
            <td>M</td>
            <td>T</td>
            <td>W</td>
            <td>T</td>
            <td>F</td>
          </tr>
          {[...Array(12)].map((x,i)=>(
            <tr key={i}>
              <td>{''+(i<2?'0':'')+(i+8)+':00'}</td>
              {[...Array(5)].map((y,j)=>(<TimeCell key={j} day={j} time={i} table={this.props.table}/>))}
            </tr>
            ))}
        </tbody>
      </table>
    );
  }
}
