import React, { Component, Fragment } from 'react';

import Basic from './Basic';
import Sizes from './Sizes';
import Disabled from './Disabled';
import Decimals from './Decimals';
import Formatter from './Formatter';

class DatePickerPage extends Component {
  render() { 
    return (
      <Fragment>
        <h1 className="title">InputNumber</h1>

        <p className="text">
          Enter a number within certain range with the mouse or keyboard.
        </p>

        <h2 className="title">When To Use</h2>

        <p className="text">
          When a numeric value needs to be provided.
        </p>

        <h2 className="title">Examples:</h2>

        <Basic />
        <Sizes />
        <Disabled />
        <Decimals />
        <Formatter />

      </Fragment>
    );
  }
}
 
export default DatePickerPage;