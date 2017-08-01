import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button, notification, Select, Icon } from 'antd';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

const openNotificationDuration = () => {
  const args = {
    message: 'Notification Title',
    description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
    duration: 0,
  };
  notification.open(args);
};

const { Option } = Select;
const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
const openPlacement = () => {
  notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

const close = () => {
  console.log('Notification was closed. Either the close button was clicked or duration time elapsed.');
};
const openCloseButton = () => {
  const key = `open${Date.now()}`;
  const btnClick = function () {
    // to hide notification box
    notification.close(key);
  };
  const btn = (
    <Button type="primary" size="small" onClick={btnClick}>
      Confirm
    </Button>
  );
  notification.open({
    message: 'Notification Title',
    description: 'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
    btn,
    key,
    onClose: close,
  });
};

const openCustomize = () => {
  notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    style: {
      width: 600,
      marginLeft: 335 - 600,
    },
  });
};

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

const openCustomizeIcon = () => {
  notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
  });
};

storiesOf('Notificaion', module)
  .add('Basic Usage', () => (
    <Button type="primary" onClick={openNotification}>Open the notification box</Button>
  ))
  .add('Duration after which the notification box is closed', () => (
    <Button type="primary" onClick={openNotificationDuration}>Open the notification box</Button>
  ))
  .add('Notification with icon', () => (
    <div>
      <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
      <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
      <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
      <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
    </div>
  ))
  .add('Customized Icon', () => (
    <Button type="primary" onClick={openCustomizeIcon}>Open the notification box</Button>

  ))
  .add('Customized style', () => (
    <Button type="primary" onClick={openCustomize}>Open the notification box</Button>
  ))
  .add('Custom close button', () => (
    <Button type="primary" onClick={openCloseButton}>Open the notification box</Button>
  ))
  .add('Placement', () => (
    <div>
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
        onClick={openPlacement}
      >
        Open the notification box
    </Button>
    </div>
  ))
