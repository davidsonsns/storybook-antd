import React, { Component } from 'react';
import { Calendar } from 'antd';

class Basic extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
        <Calendar />
      </section>
    );
  }
}
 
export default Basic;