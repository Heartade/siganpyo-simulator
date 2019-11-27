import React, {Component} from 'react';
import '../Screens/ScreenPlay.css';

export default class TimeCell extends Component {
  render() {
    return (
      <td>{this.props.table.class_info[this.props.day][this.props.time]}</td>
    )
  }
}
