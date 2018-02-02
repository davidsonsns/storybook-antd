import React, { Component } from 'react';
import { Rate } from 'antd';

class ReadOnly extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Read Only</h3>
        <Rate disabled defaultValue={2} />
      </section>
    );
  }
}
 
export default ReadOnly;