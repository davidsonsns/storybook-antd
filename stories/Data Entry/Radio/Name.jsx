import React, { Component } from 'react';
import { Radio } from 'antd';

const RadioGroup = Radio.Group;

class Name extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">RadioGroup With Name</h3>

        <RadioGroup name="radiogroup" defaultValue={1}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </RadioGroup>
      </section>
    );
  }
}
 
export default Name;