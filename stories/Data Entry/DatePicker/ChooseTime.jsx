import React, { Component } from 'react';
import { DatePicker } from 'antd';

class ChooseTime extends Component {
  render() {
    const { RangePicker } = DatePicker;

    return (
      <section className="example">
        <h3 className="ex-title">Choose Time</h3>

        <DatePicker
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          placeholder="Select Time"
        />
        <br /><br/>
        <RangePicker
          showTime={{ format: 'HH:mm' }}
          format="YYYY-MM-DD HH:mm"
          placeholder={['Start Time', 'End Time']}
        />
      </section>
    );
  }
}
 
export default ChooseTime;