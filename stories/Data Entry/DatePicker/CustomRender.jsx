import React, { Component } from 'react';
import { DatePicker } from 'antd';

class CustomRender extends Component {
  render() {
    const { RangePicker } = DatePicker;

    return (
      <section className="example">
        <h3 className="ex-title">Customized Date Rendering</h3>

        <DatePicker
          dateRender={(current) => {
            const style = {};
            if (current.date() === 1) {
              style.border = '1px solid #1890ff';
              style.borderRadius = '50%';
            }
            return (
              <div className="ant-calendar-date" style={style}>
                {current.date()}
              </div>
            );
          }}
        />
        <br/><br/>
        <RangePicker
          dateRender={(current) => {
            const style = {};
            if (current.date() === 1) {
              style.border = '1px solid #1890ff';
              style.borderRadius = '50%';
            }
            return (
              <div className="ant-calendar-date" style={style}>
                {current.date()}
              </div>
            );
          }}
        />
      </section>
    );
  }
}
 
export default CustomRender;