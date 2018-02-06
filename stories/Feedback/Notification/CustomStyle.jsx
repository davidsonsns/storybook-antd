import React, { Component } from 'react';
import { Button, notification } from 'antd';

class CustomStyle extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Customized style</h3>

        <Button type="primary" onClick={this.openNotification}>Open the notification box</Button>
      </section>
    );
  }

  openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      style: {
        width: 600,
        marginLeft: 335 - 600,
      },
    });
  };
}
 
export default CustomStyle;