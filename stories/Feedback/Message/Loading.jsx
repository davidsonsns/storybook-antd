import React, { Component } from 'react';
import { message, Button } from 'antd';

class Loading extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Message of loading</h3>
        <Button onClick={this.success}>Display a loading indicator</Button>
      </section>
    );
  }

  success = () => {
    const hide = message.loading('Action in progress..', 0);
    setTimeout(hide, 2500);
  };
}
 
export default Loading;