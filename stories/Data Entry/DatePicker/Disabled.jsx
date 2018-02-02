import React, { Component } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

class Disabled extends Component {
  render() {
    const { MonthPicker, RangePicker } = DatePicker;
    const dateFormat = 'YYYY-MM-DD';

    return (
      <section className="example">
        <h3 className="ex-title">Disabled</h3>

        <DatePicker defaultValue={moment('2015-06-06', dateFormat)} disabled />
        <br /><br/>
        <MonthPicker defaultValue={moment('2015-06', 'YYYY-MM')} disabled />
        <br /><br/>
        <RangePicker
          defaultValue={[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]}
          disabled
        />
      </section>
    );
  }
}
 
export default Disabled;