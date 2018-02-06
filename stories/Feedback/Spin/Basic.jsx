import React, { Component } from 'react';
import { Spin } from 'antd';

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic Usage</h3>
        <Spin />
      </section>
    );
  }
}
 
export default Basic;