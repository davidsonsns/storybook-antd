import React, { Component } from 'react';
import { message, Button } from 'antd';

class Normal extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Normal prompt</h3>
        <Button type="primary" onClick={this.info}>Display normal message</Button>
      </section>
    );
  }

  info = () => {
    message.info('This is a normal message');
  };
}
 
export default Normal;