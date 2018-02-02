import React, { Component } from 'react';
import { DatePicker } from 'antd';

class Basic extends Component {
  render() {
    const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>

        <DatePicker />
        <br/><br/>
        <MonthPicker placeholder="Select month" />
        <br /><br />
        <RangePicker />
        <br /><br />
        <WeekPicker placeholder="Select week" />
      </section>
    );
  }
}
 
export default Basic;