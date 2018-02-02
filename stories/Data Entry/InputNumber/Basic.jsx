import React, { Component } from 'react';
import { InputNumber } from 'antd';

class Basic extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>

        <InputNumber min={1} max={10} defaultValue={3} />
      </section>
    );
  }
}
 
export default Basic;