import React, { Component } from 'react';
import { Popconfirm, message } from 'antd';

class Basic extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>

        <Popconfirm title="Are you sure delete this task?" onConfirm={this.confirm} onCancel={this.cancel} okText="Yes" cancelText="No">
          <a href="#">Delete</a>
        </Popconfirm>
      </section>
    );
  }

  confirm(e) {
    message.success('Click on Yes');
  }

  cancel(e) {
    message.error('Click on No');
  }
}
 
export default Basic;