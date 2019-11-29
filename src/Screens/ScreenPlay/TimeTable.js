import React, {Component} from 'react';
import TimeCell from '../../Components/TimeCell.js';
//import './TimeTable.css';

export default class TimeTable extends Component {
  constructor(props) {
    super(props)
    this.border_color = "#EEEEEE"
    this.background_color = "#FFFFFF"
  }
  render() {
    const table_style = {
      width: "100%",
      height: "100%",
      backgroundColor: this.background_color,
      border: "0px",
      borderCollapse: "collapse",
      tableLayout: "fixed",
    };
    const dayCell_style = {
      backgroundColor: this.background_color,
      borderBottom: "1px solid "+this.border_color,
      padding: "4px"
    };
    const timeCell_style = {
      backgroundColor: this.background_color,
      borderTop: "1px solid "+this.border_color,
      padding: "4px"
    }
    const tbody_style = {}
    const tr_style = {}

    return (  
      <table style={table_style}>
        <tbody style={{border: "0px", padding: "0px", margin: "0px"}}> 
          <tr style={{border: "0px", padding: "0px", margin: "0px"}}>
            <td style={dayCell_style}></td>
            <td style={dayCell_style}>M</td>
            <td style={dayCell_style}>T</td>
            <td style={dayCell_style}>W</td>
            <td style={dayCell_style}>T</td>
            <td style={dayCell_style}>F</td>
          </tr>
          {[...Array(12)].map((x,i)=>(
            <tr key={i}>
              <td style={timeCell_style}>{''+(i<2?'0':'')+(i+8)+':00'}</td>
              {[...Array(5)].map((y,j)=>(<TimeCell
                 key={j} day={j} time={i} table={this.props.table} defaultColor={this.props.defaultColor}/>))}
            </tr>
            ))}
        </tbody>
      </table>
    );
  }
}
