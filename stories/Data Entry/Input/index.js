import React, { Component, Fragment } from 'react';

import Basic from './Basic';
import Search from './Search';
import Autosize from './Autosize';
import Prefix from './Prefix';

class DatePickerPage extends Component {
  render() { 
    return (
      <Fragment>
        <h1 className="title">Input</h1>

        <p className="text">
          A basic widget for getting the user input is a text field. Keyboard and mouse can be used for providing or changing data.
        </p>

        <h2 className="title">When To Use</h2>

        <ul>
          <li>A user input in a form field is needed.</li>
          <li>A search input is required.</li>
        </ul>

        <h2 className="title">Examples:</h2>

        <Basic />
        <Search />
        <Autosize />
        <Prefix />

      </Fragment>
    );
  }
}
 
export default DatePickerPage;