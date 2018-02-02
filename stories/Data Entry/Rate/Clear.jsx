import React, { Component } from 'react';
import { Rate } from 'antd';

class Clear extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Clear Star</h3>
        <Rate defaultValue={3} /> allowClear: true
        <br />
        <Rate allowClear={false} defaultValue={3} /> allowClear: false
      </section>
    );
  }
}
 
export default Clear;