import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import AutoComplate from './AutoComplate';
import Checkbox from './Checkbox';
import DatePicker from './DatePicker';
import Form from './Form';
import InputNumber from './InputNumber';
import Input from './Input';
import Rate from './Rate';
import Radio from './Radio';
import Slider from './Slider';
import Switch from './Switch';
import Select from './Select';
import Upload from './Upload';

storiesOf('Data Entry', module)
  .add('AutoComplate', () => <AutoComplate />)
  .add('Checkbox', () => <Checkbox />)
  .add('DatePicker', () => <DatePicker />)
  .add('Form', () => <Form />)
  .add('InputNumber', () => <InputNumber />)
  .add('Input', () => <Input />)
  .add('Rate', () => <Rate />)
  .add('Radio', () => <Radio />)
  .add('Slider', () => <Slider />)
  .add('Switch', () => <Switch />)
  .add('Select', () => <Select />)
  .add('Upload', () => <Upload />);