import React from 'react';
import { storiesOf } from '@storybook/react';

import ButtonPage from './Button';
import IconPage from './Icon';

storiesOf('General', module)
  .add('Button', () => <ButtonPage />)
  .add('Icon', () => <IconPage />);