import React, { Component } from 'react';
import { Button, notification, Icon } from 'antd';

class CustomIcon extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Customized Icon</h3>

        <Button type="primary" onClick={this.openNotification}>Open the notification box</Button>
      </section>
    );
  }

  openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
    });
  };
}
 
export default CustomIcon;