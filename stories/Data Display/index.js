import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Avatar from './Avatar';

storiesOf('Data Display', module)
  .add('Avatar', () => <Avatar />);