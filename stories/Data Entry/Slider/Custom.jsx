import React, { Component } from 'react';
import { Slider } from 'antd';

function formatter(value) {
  return `${value}%`;
}

class Custom extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Customerize tooltip</h3>

        <div>
          <Slider tipFormatter={formatter} />
          <Slider tipFormatter={null} />
        </div>
      </section>
    );
  }
}
 
export default Custom;