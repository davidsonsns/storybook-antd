import React, { Component } from 'react';
import { Alert } from 'antd';

class Custom extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Customized Close Text</h3>
        <Alert message="Info Text" type="info" closeText="Close Now" />
      </section>
    );
  }
}
 
export default Custom;