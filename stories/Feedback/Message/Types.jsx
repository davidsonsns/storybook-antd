import React, { Component } from 'react';
import { message, Button } from 'antd';

class Types extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Normal prompt</h3>
        
        <Button onClick={this.success}>Success</Button>
        <Button className="ml20" onClick={this.error}>Error</Button>
        <Button className="ml20" onClick={this.warning}>Warning</Button>
      </section>
    );
  }

  success = () => {
    message.success('This is a message of success');
  };

  error = () => {
    message.error('This is a message of error');
  };

  warning = () => {
    message.warning('This is message of warning');
  };
}
 
export default Types;