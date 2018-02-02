import React, { Component, Fragment } from 'react';

import Search from './Search';
import AutoComplate from './AutoComplate';

class DatePickerPage extends Component {
  render() { 
    return (
      <Fragment>
        <h1 className="title">Select</h1>

        <p className="text">
          Select component to select value from options.
        </p>

        <h2 className="title">When To Use</h2>

        <ul>
          <li>A dropdown menu for displaying choices - an elegant alternative to the native select element.</li>
          <li>Utilizing Radio is recommended when there are fewer total options (less than 5).</li>
        </ul>

        <h2 className="title">Examples:</h2>

        <Search />
        <AutoComplate />

      </Fragment>
    );
  }
}
 
export default DatePickerPage;