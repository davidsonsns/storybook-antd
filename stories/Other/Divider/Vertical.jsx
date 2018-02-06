import React, { Component } from 'react';
import { Divider } from 'antd';

class Vertical extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Vertical</h3>

        <div>
          Text
          <Divider type="vertical" />
          <a href="#">Link</a>
          <Divider type="vertical" />
          <a href="#">Link</a>
        </div>
      </section>
    );
  }
}
 
export default Vertical;