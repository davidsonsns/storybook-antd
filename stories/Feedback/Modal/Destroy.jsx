import React, { Component } from 'react';
import { Modal, Button } from 'antd';

class Destroy extends Component {
  state = { visible: false };

  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Manual to destroy</h3>
        <Button onClick={this.success}>Success</Button>
      </section>
    );
  }

  success() {
    const modal = Modal.success({
      title: 'This is a notification message',
      content: 'This modal will be destroyed after 1 second',
    });
    setTimeout(() => modal.destroy(), 1000);
  }
}
 
export default Destroy;