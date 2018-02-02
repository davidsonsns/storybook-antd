import React, { Component } from 'react';
import { Checkbox } from 'antd';

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
        <Checkbox>Checkbox</Checkbox>
      </section>
    );
  }
}
 
export default Basic;