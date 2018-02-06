import React, { Component } from 'react';
import { Button, Select, notification } from 'antd';

const { Option } = Select;
const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

class Placement extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Placement</h3>

        <Select
          defaultValue="topRight"
          style={{ width: 120, marginRight: 10 }}
          onChange={(val) => {
            notification.config({
              placement: val,
            });
          }}
        >
          {options.map(val => <Option key={val} value={val}>{val}</Option>)}
        </Select>
        <Button
          type="primary"
          onClick={openNotification}
        >
          Open the notification box
        </Button>
      </section>
    );
  }

  openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };
}
 
export default Placement;