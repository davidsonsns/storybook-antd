import React, { Component } from 'react';
import { DatePicker } from 'antd';

class Footer extends Component {
  state = {}

  render() {
    const { RangePicker, MonthPicker } = DatePicker;
    return (
      <section className="example">
        <h3 className="ex-title">Extra Footer</h3>

        <DatePicker renderExtraFooter={() => 'extra footer'} />
        <DatePicker style={{marginLeft: '20px'}} renderExtraFooter={() => 'extra footer'} showTime />
        <br/><br/>
        <RangePicker renderExtraFooter={() => 'extra footer'} />
        <br/><br/>
        <RangePicker renderExtraFooter={() => 'extra footer'} showTime />
        <MonthPicker style={{marginLeft: '20px'}} renderExtraFooter={() => 'extra footer'} placeholder="Select month" />
      </section>
    );
  }
}
 
export default Footer;