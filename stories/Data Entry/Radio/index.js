import React, { Component, Fragment } from 'react';

import Basic from './Basic';
import Disable from './Disabled';
import Group from './Group';
import Vertical from './Vertical';
import Optional from './Optional';
import Style from './Style';
import Name from './Name';
import Size from './Size';

class DatePickerPage extends Component {
  render() { 
    return (
      <Fragment>
        <h1 className="title">Radio</h1>

        <p className="text">
          Radio.
        </p>

        <h2 className="title">When To Use</h2>

        <ul>
          <li>Used to select a single state in multiple options.</li>
          <li>The difference between Select is that Radio is visible to user and can facilitate the comparison of choice. So, when you want to use Radio, option should not be too much.</li>
        </ul>

        <h2 className="title">Examples:</h2>

        <Basic />
        <Disable />
        <Group />
        <Vertical />
        <Optional />
        <Style />
        <Name />
        <Size />

      </Fragment>
    );
  }
}
 
export default DatePickerPage;