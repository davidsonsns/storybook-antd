import React, { Component, Fragment } from 'react';

import Basic from './Basic';
import HalfStar from './HalfStar';
import Copywriting from './Copywriting';
import ReadOnly from './ReadOnly';
import Clear from './Clear';
import Other from './Other';

class DatePickerPage extends Component {
  render() { 
    return (
      <Fragment>
        <h1 className="title">Rate</h1>

        <p className="text">
          Rate component.
        </p>

        <h2 className="title">When To Use</h2>

        <ul>
          <li>Show evaluation.</li>
          <li>A quick rating operation on something.</li>
        </ul>

        <h2 className="title">Examples:</h2>

        <Basic />
        <HalfStar />
        <Copywriting />
        <ReadOnly />
        <Clear />
        <Other />

      </Fragment>
    );
  }
}
 
export default DatePickerPage;