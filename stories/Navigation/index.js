import React from 'react';
import { storiesOf } from '@storybook/react';

import Pagination from './Pagination';
import Steps from './Steps';

storiesOf('Navigation', module)
  .add('Pagination', () => <Pagination />)
  .add('Steps', () => <Steps />);