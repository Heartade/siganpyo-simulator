import React, {Component} from 'react';
import '../Screens/ScreenPlay.css';
//import { timingSafeEqual } from 'crypto';

export default class TimeCell extends Component {
  render() {
    var textContent;
    var borderColor;

    if(this.props.table[this.props.day][this.props.time].color === this.props.defaultColor) {
      textContent = "";
      borderColor = "white";
    }
    else if(this.props.time > 0 &&
      this.props.table[this.props.day][this.props.time].color === this.props.table[this.props.day][this.props.time-1].color) {
      textContent = "";
      borderColor = this.props.table[this.props.day][this.props.time].color;
    }
    else if(this.props.time > 0 &&
      this.props.defaultColor === this.props.table[this.props.day][this.props.time-1].color) {
      textContent = "";
      borderColor = "white";
    }
    else {
      textContent = this.props.table[this.props.day][this.props.time].class_info;
      borderColor = "white";
    }

    
    const timeCell_style = {
      backgroundColor: this.props.table[this.props.day][this.props.time].color,
      borderTop: "1px solid "+borderColor,
      paddingTop: "4px",
      paddingLeft: "4px",
      paddingRight: "4px",
      textAlign: "left",
      verticalAlign: "text-top",
      color: "white",
      fontSize: "0.55rem",
      fontWeight: "200"
    };

    return (
      <td style={timeCell_style}>
        {textContent}
      </td>
    )
  }
}
