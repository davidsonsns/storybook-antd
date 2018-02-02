import React, { Component } from 'react';
import { Pagination } from 'antd';

class Basic extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Basic pagination</h3>
        <div className="mb20">
          <Pagination defaultCurrent={1} total={50} />
        </div>
        <Pagination defaultCurrent={6} total={500} />
      </section>
    );
  }
}
 
export default Basic;