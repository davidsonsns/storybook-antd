import React, { Component } from 'react';
import { Avatar } from 'antd';

class Basic extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
          <Avatar size="large" icon="user" />
          <Avatar className="ml20" icon="user" />
          <Avatar className="ml20" size="small" icon="user" />
          <Avatar className="ml20" shape="square" size="large" icon="user" />
          <Avatar className="ml20" shape="square" icon="user" />
          <Avatar className="ml20" shape="square" size="small" icon="user" />
      </section>
    );
  }
}
 
export default Basic;