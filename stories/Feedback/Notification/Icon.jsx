import React, { Component } from 'react';
import { Button, notification } from 'antd';

class Icon extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Notification with icon</h3>

        <div>
          <Button onClick={() => this.openNotificationWithIcon('success')}>Success</Button>
          <Button className="ml20" onClick={() => this.openNotificationWithIcon('info')}>Info</Button>
          <Button className="ml20" onClick={() => this.openNotificationWithIcon('warning')}>Warning</Button>
          <Button className="ml20" onClick={() => this.openNotificationWithIcon('error')}>Error</Button>
        </div>
      </section>
    );
  }

  openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };
}
 
export default Icon;