import React from 'react';
import { storiesOf } from '@storybook/react';

import Al from './Alert/index';
import Modal from './Modal';
import Message from './Message';
import Notification from './Notification';
import Progress from './Progress';
import Popconfirm from './Popconfirm';
import Spin from './Spin';

storiesOf('Feedback', module)
  .add('Alert', () => <Al />)
  .add('Modal', () => <Modal />)
  .add('Message', () => <Message />)
  .add('Notification', () => <Notification />)
  .add('Progress', () => <Progress />)
  .add('Popconfirm', () => <Popconfirm />)
  .add('Spin', () => <Spin />);