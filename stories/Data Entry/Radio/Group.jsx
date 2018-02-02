import React, { Component } from 'react';
import { Radio } from 'antd';

const RadioGroup = Radio.Group;

class Group extends Component {
  state = {
    value: 1
  }

  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Radio Group</h3>

        <RadioGroup onChange={this.onChange} value={this.state.value}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </RadioGroup>
      </section>
    );
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
}
 
export default Group;