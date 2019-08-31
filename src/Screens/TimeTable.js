import React from 'react';
import logo from './logo.svg';
import TimeCell from './TimeCell.js';
import './ScreenPlay.css';

export default class TimeTable {
  state = {
  }
  render() {
    return (
      <table>
        <tr> {/*0900*/}
          <TimeCell Day={0} Time={0}/>
          <TimeCell Day={1} Time={0}/>
          <TimeCell Day={2} Time={0}/>
          <TimeCell Day={3} Time={0}/>
          <TimeCell Day={4} Time={0}/>
        </tr>
        <tr> {/*1000*/}
          <TimeCell Day={0} Time={1}/>
          <TimeCell Day={1} Time={1}/>
          <TimeCell Day={2} Time={1}/>
          <TimeCell Day={3} Time={1}/>
          <TimeCell Day={4} Time={1}/>
        </tr>
        <tr> {/*1100*/}
          <TimeCell Day={0} Time={2}/>
          <TimeCell Day={1} Time={2}/>
          <TimeCell Day={2} Time={2}/>
          <TimeCell Day={3} Time={2}/>
          <TimeCell Day={4} Time={2}/>
        </tr>
        <tr> {/*1200*/}
          <TimeCell Day={0} Time={3}/>
          <TimeCell Day={1} Time={3}/>
          <TimeCell Day={2} Time={3}/>
          <TimeCell Day={3} Time={3}/>
          <TimeCell Day={4} Time={3}/>
        </tr>
        <tr> {/*1300*/}
          <TimeCell Day={0} Time={4}/>
          <TimeCell Day={1} Time={4}/>
          <TimeCell Day={2} Time={4}/>
          <TimeCell Day={3} Time={4}/>
          <TimeCell Day={4} Time={4}/>
        </tr>
        <tr> {/*1400*/}
          <TimeCell Day={0} Time={5}/>
          <TimeCell Day={1} Time={5}/>
          <TimeCell Day={2} Time={5}/>
          <TimeCell Day={3} Time={5}/>
          <TimeCell Day={4} Time={5}/>
        </tr>
        <tr> {/*1500*/}
          <TimeCell Day={0} Time={6}/>
          <TimeCell Day={1} Time={6}/>
          <TimeCell Day={2} Time={6}/>
          <TimeCell Day={3} Time={6}/>
          <TimeCell Day={4} Time={6}/>
        </tr>
        <tr> {/*1600*/}
          <TimeCell Day={0} Time={7}/>
          <TimeCell Day={1} Time={7}/>
          <TimeCell Day={2} Time={7}/>
          <TimeCell Day={3} Time={7}/>
          <TimeCell Day={4} Time={7}/>
        </tr>
        <tr> {/*1700*/}
          <TimeCell Day={0} Time={8}/>
          <TimeCell Day={1} Time={8}/>
          <TimeCell Day={2} Time={8}/>
          <TimeCell Day={3} Time={8}/>
          <TimeCell Day={4} Time={8}/>
        </tr>
        <tr> {/*1800*/}
          <TimeCell Day={0} Time={9}/>
          <TimeCell Day={1} Time={9}/>
          <TimeCell Day={2} Time={9}/>
          <TimeCell Day={3} Time={9}/>
          <TimeCell Day={4} Time={9}/>
        </tr>
        <tr> {/*1900*/}
          <TimeCell Day={0} Time={10}/>
          <TimeCell Day={1} Time={10}/>
          <TimeCell Day={2} Time={10}/>
          <TimeCell Day={3} Time={10}/>
          <TimeCell Day={4} Time={10}/>
        </tr>
        <tr> {/*2000*/}
          <TimeCell Day={0} Time={11}/>
          <TimeCell Day={1} Time={11}/>
          <TimeCell Day={2} Time={11}/>
          <TimeCell Day={3} Time={11}/>
          <TimeCell Day={4} Time={11}/>
        </tr>
      </table>
    );
  }
}
