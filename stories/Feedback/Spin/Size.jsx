import React, { Component } from 'react';
import { Spin } from 'antd';

class Size extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Size</h3>

        <Spin size="small" />
        <Spin className="ml20" />
        <Spin className="ml20" size="large" />
      </section>
    );
  }
}
 
export default Size;