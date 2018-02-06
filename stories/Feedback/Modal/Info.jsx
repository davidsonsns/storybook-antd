import React, { Component } from 'react';
import { Modal, Button } from 'antd';

class Info extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Information modal dialog</h3>
        <Button onClick={this.info}>Info</Button>
        <Button className="ml20" onClick={this.success}>Success</Button>
        <Button className="ml20" onClick={this.error}>Error</Button>
        <Button className="ml20" onClick={this.warning}>Warning</Button>
      </section>
    );
  }

  info() {
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  }

  success() {
    Modal.success({
      title: 'This is a success message',
      content: 'some messages...some messages...',
    });
  }

  error() {
    Modal.error({
      title: 'This is an error message',
      content: 'some messages...some messages...',
    });
  }

  warning() {
    Modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  }
}
 
export default Info;