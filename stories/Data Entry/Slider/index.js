import React, { Component, Fragment } from 'react';

import Basic from './Basic';
import InputNumber from './InputNumber';
import Icon from './Icon';
import Custom from './Custom';
import EventSlider from './Event';
import Graduated from './Graduated';
import Vertical from './Vertical';

class DatePickerPage extends Component {
  render() { 
    return (
      <Fragment>
        <h1 className="title">Slider</h1>

        <p className="text">
          A Slider component for displaying current value and intervals in range.
        </p>

        <h2 className="title">When To Use</h2>

        <p className="text">
          To input a value in a range.
        </p>

        <h2 className="title">Examples:</h2>

        <Basic />
        <InputNumber />
        <Icon min={0} max={10} />
        <Custom />
        <EventSlider />
        <Graduated />
        <Vertical />

      </Fragment>
    );
  }
}
 
export default DatePickerPage;