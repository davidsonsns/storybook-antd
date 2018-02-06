import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Avatar from './Avatar';
import Badge from './Badge';
import Calendar from './Calendar';
import Card from './Card';
import Collapse from './Collapse';
import Carousel from './Carousel';
import List from './List';
import Table from './Table';
import Tabs from './Tabs';
import Timeline from './Timeline';

storiesOf('Data Display', module)
  .add('Avatar', () => <Avatar />)
  .add('Badge', () => <Badge />)
  .add('Calendar', () => <Calendar />)
  .add('Card', () => <Card />)
  .add('Collapse', () => <Collapse />)
  .add('Carousel', () => <Carousel />)
  .add('List', () => <List />)
  .add('Table', () => <Table />)
  .add('Tabs', () => <Tabs />)
  .add('Timeline', () => <Timeline />);