import React, { Component } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';


class Preset extends Component {
  state = {}
  
  render() {
    const RangePicker = DatePicker.RangePicker;
    return (
      <section className="example">
        <h3 className="ex-title">Presetted Ranges</h3>

        <RangePicker
          ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
        />
        <br /><br/>
        <RangePicker
          ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
          showTime
          format="YYYY/MM/DD HH:mm:ss"
        />
      </section>
    );
  }
}
 
export default Preset;