import React, { Component, Fragment } from 'react';

import Basic from './Basic';
import Disable from './Disabled';
import Icon from './Icon';
import Size from './Size';
import Loading from './Loading';

class DatePickerPage extends Component {
  render() { 
    return (
      <Fragment>
        <h1 className="title">Switch</h1>

        <p className="text">
          Switching Selector.
        </p>

        <h2 className="title">When To Use</h2>

        <ul>
          <li>
            If you need to represent the
            switching between two states or
            on-off state.
          </li>
          <li>
            The difference between Switch and Checkbox
            is that Switch will trigger a state
            change directly when you toggle it,
            while Checkbox is generally used for state
            marking, which should work in conjunction
            with submit operation.
          </li>
        </ul>

        <h2 className="title">Examples:</h2>

        <Basic />
        <Disable />
        <Icon />
        <Size />
        <Loading />

      </Fragment>
    );
  }
}
 
export default DatePickerPage;