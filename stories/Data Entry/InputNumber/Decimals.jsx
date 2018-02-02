import React, { Component } from 'react';
import { InputNumber } from 'antd';

class Decimals extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Decimals</h3>

        <InputNumber min={0} max={10} step={0.1} />
      </section>
    );
  }
}
 
export default Decimals;