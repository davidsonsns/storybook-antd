import React, { Component } from 'react';
import { Button, notification } from 'antd';

class CustomClose extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Custom close button</h3>

        <Button type="primary" onClick={this.openNotification}>
          Open the notification box
        </Button>
      </section>
    );
  }

  openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button type="primary" size="small" onClick={() => notification.close(key)}>
        Confirm
      </Button>
    );
    notification.open({
      message: 'Notification Title',
      description: 'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
      btn,
      key
    });
  };
}
 
export default CustomClose;