import React, { Component } from 'react';
import { DatePicker, Radio } from 'antd';

class Size extends Component {

  state = {
    size: 'default',
  };

  render() {
    const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
    const { size } = this.state;

    return (
      <section className="example">
        <h3 className="ex-title">Three Sizes</h3>

        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br /><br />
        <DatePicker size={size} />
        <br /><br />
        <MonthPicker size={size} placeholder="Select Month" />
        <br /><br />
        <RangePicker size={size} />
        <br /><br />
        <WeekPicker size={size} placeholder="Select Week" />

      </section>
    );
  }

  handleSizeChange = e => this.setState({ size: e.target.value });
}
 
export default Size;