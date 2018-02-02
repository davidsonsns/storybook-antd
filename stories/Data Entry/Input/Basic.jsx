import React, { Component } from 'react';
import { Input } from 'antd';

class Basic extends Component {
  state = {}
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Basic usage</h3>

        <Input style={{width: '200px'}} placeholder="Basic usage" />
      </section>
    );
  }
}
 
export default Basic;