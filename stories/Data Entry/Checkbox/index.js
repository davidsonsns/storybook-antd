import React, { Component, Fragment } from 'react';

import Basic from './Basic';
import Disabled from './Disabled';
import Controll from './Controll';
import Group from './Group';
import CheckAll from './CheckAll';
import Grid from './Grid';

class CheckboxPage extends Component {
  render() { 
    return (
      <Fragment>
        <h1 className="title">Checkbox</h1>

        <p className="text">
          Checkbox.
        </p>

        <h2 className="title">When To Use</h2>

        <ul>
          <li>Used for selecting multiple values from several options.</li>
          <li>
            If you use only one checkbox, it is the same as using Switch to
            toggle between two states. The difference is that Switch will
            trigger the state change directly, but Checkbox just marks
            the state as changed and this needs to be submitted.
          </li>
        </ul>

        <h2 className="title">Examples:</h2>

        <Basic />
        <Disabled />
        <Controll />
        <Group />
        <CheckAll />
        <Grid />

      </Fragment>
    );
  }
}
 
export default CheckboxPage;